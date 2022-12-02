import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
// import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/shared/models/food.service';
import { CartService } from 'src/app/shared/services/cart.service';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

// onBack() {
// throw new Error('Method not implemented.');
// }
  food!:any;
pageTitle: any;



  constructor(private _food:FoodService, private _router:Router,private _cartService:CartService ,activate_router:ActivatedRoute){
  activate_router.params.subscribe((params)=>{
    if(params['id'])

    _food.getFoodById(params['id']).subscribe((serverFood)=>{
      this.food = serverFood;
    });
  })

  }

  ngOnInit(): void {
  }
  addToCart(){
    this._cartService.addToCart(this.food);
    this._router.navigateByUrl('/cart-page');

  }

}

