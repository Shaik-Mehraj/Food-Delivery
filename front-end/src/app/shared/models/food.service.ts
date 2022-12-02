import { Injectable } from '@angular/core';
import { Food } from './Food';
// import { food_items_list } from './data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_URL,FOOD_BY_URL,SEARCH_URL } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAllFoods():Observable<Food[]>{    // Getting all the foods
    return this.http.get<Food[]>(FOODS_URL);
  }
  getAllFoodsBySearchTerm(searchTerm:string):Observable<Food[]>{   // Getting foods by search term
    return this.http.get<Food[]>(SEARCH_URL + searchTerm);
  }

  getFoodById(foodId:string):Observable<Food[]>{
    return this.http.get<Food[]>(FOOD_BY_URL + foodId);
  }
}
