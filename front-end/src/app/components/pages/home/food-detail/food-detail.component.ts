import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/shared/models/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
onBack() {
throw new Error('Method not implemented.');
}
  food!:Food;
pageTitle: any;
game: any;

  constructor(private _food:FoodService,activate_route:ActivatedRoute){
  activate_route.params.subscribe((params)=>{
    if(params['id'])
    this.food =_food.getFoodById(params['id'])
  })
  }

  ngOnInit(): void {
  }
  addToCart(){

  }

}

