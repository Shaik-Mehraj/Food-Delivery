import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/shared/models/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];
  origins: any;

  constructor(private _foods:FoodService, activated_route:ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    activated_route.params.subscribe((params)=>{
      if(params['searchTerm'])
      foodsObservable = this._foods.getAllFoodsBySearchTerm(params['searchTerm']);
      else
      foodsObservable  = _foods.getAllFoods();

      foodsObservable.subscribe((serverFoods)=>{
      this.foods = serverFoods;
    })
  })
  }


  ngOnInit(): void {

  }


}
