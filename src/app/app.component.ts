import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ceramica-te-arte';
  datos: any;
  id:number;
  imageProduct:string;
  titleProduct:string;
  descriptionProduct:string;

  constructor(
    private dataService: ProductsService
  ){

  }
  ngOnInit() {
    this.dataService.getProducts().subscribe({
      next:(dataProducts)=>{
        console.log(dataProducts)
        this.id = dataProducts.id;
        this.imageProduct = dataProducts.image;
        this.titleProduct = dataProducts.productTitle;
        this.descriptionProduct = dataProducts.productDescription

      },
      error: (err)=>{
        console.log(err)
      }
    })
  }



  }




