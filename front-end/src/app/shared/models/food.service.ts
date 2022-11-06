import { Injectable } from '@angular/core';
import { Food } from './Food';
import { food_items_list } from './data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAll(): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getAll():Food[]{
    return food_items_list;

  }
  getAllFoods():Food[]{
    return food_items_list;
  }
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAllFoods()
    .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
  }
}
