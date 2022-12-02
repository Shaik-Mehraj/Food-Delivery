import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:cart  
  constructor(private _cartService:CartService,) {
    this._cartService.getCartObservable().subscribe((cart: cart)=>{
      this.cart=cart
    })
   }

  ngOnInit(): void {
  }
  removeFromCart(cartItem:CartItem){
    this._cartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this._cartService.changeQuantity(cartItem.food.id,quantity);
  }

}
