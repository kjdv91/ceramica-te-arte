import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from "@angular/common/http";

import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,





  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
