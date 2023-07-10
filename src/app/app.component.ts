import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ceramica-te-arte';


  constructor(
    private dataService: ProductsService
  ){

  }


  }




