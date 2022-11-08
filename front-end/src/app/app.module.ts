import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';
import { AppRoutingModule, myComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FoodDetailComponent } from './components/pages/home/food-detail/food-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    myComponents,
    FoodDetailComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
