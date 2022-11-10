import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cart } from '../models/cart';
import { Food } from '../models/Food';
import { CartItem } from '../models/cartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cart=this.getCartToLocalStorage()
  private cartSubject:BehaviorSubject<cart>=new BehaviorSubject(this.cart)

  constructor() { }
  addToCart(food:Food){
    let cartItem=this.cart.items.find(item=>item.food.id===food.id)
    if(cartItem)
    return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage()
  }
  removeFromCart(id:number){
    this.cart.items=this.cart.items.filter(item=>item.food.id !=id);
    this.setCartToLocalStorage()
  }
  changeQuantiy(id:number,quantity:number){
    let cartItem=this.cart.items
    .find(item=>item.food.id===id);
    if(!cartItem)return;
    cartItem.quantity=quantity;
      cartItem.price=quantity*cartItem?.food.price;
  }
  clearCart(){
    this.cart=new cart;
    this.setCartToLocalStorage()
  }
  getCartObservable():Observable<cart>{
    return this.cartSubject.asObservable();
  }
  private setCartToLocalStorage(){
    this.cart.totalPrice=this.cart.items
    .reduce((prevSum, currentItem)=>prevSum+currentItem.price,0);
    this.cart.totalCount=this.cart.items
    .reduce((prevSum,currentItem)=>prevSum+currentItem.quantity,0)
    const cartJson=JSON.stringify(this.cart)
    localStorage.setItem('cart',cartJson)
  }
  private getCartToLocalStorage(){
    const cartJson=localStorage.getItem('cart');
    return cartJson? JSON.parse(cartJson):new cart();
  }
}
