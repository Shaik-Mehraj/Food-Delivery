import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { RatingModule } from 'ng-starrating';
import { AppRoutingModule, myComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FoodDetailComponent } from './components/pages/home/food-detail/food-detail.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
// import { ToastrModule } from 'ngx-toastr';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    myComponents,
    FoodDetailComponent,
    CartPageComponent,
    NotFoundComponent,
    LoginPageComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    // ToastrModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
