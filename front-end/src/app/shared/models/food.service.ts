import { Injectable } from '@angular/core';
import { Food } from './Food';
import { food_items_list } from './data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{//Getting all the foods
    return food_items_list;

  }
  getAllFoods():Food[]{
    return food_items_list;
  }
  getAllFoodsBySearchTerm(searchTerm:string){    //Getting  foods by search term
    return this.getAllFoods()
    .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
  }

  getFoodById(foodId:number):Food{
    return this.getAllFoods().find(food=>food.id==foodId)??new Food();
  }
}
