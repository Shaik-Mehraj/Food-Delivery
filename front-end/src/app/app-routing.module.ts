import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { HeaderComponent } from './components/partials/header/header.component';

 const routes: Routes = [
  {path:'login',component:LoginComponent},
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myComponents = [
  HeaderComponent,
  LoginComponent
]
