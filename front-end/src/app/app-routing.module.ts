import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { FoodDetailComponent } from './components/pages/home/food-detail/food-detail.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HeaderComponent } from './components/partials/header/header.component';

 const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'food/:id',component:FoodDetailComponent}
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myComponents = [
  HeaderComponent,
  LoginComponent,
  HomeComponent,
  SearchComponent,
]
