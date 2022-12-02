import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { FoodDetailComponent } from './components/pages/home/food-detail/food-detail.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

 const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'food/:id',component:FoodDetailComponent},
  {path:'cart-page',component:CartPageComponent}
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myComponents = [
  HeaderComponent,
  LoginPageComponent,
  HomeComponent,
  SearchComponent,
  CartPageComponent
]
