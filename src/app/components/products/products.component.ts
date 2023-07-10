import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'ceramica-te-arte';
  datos: any =[];
  id:number;
  imageProduct:string;
  titleProduct:string;
  descriptionProduct:string;

  constructor(
    private dataService: ProductsService
  ){

  }
  ngOnInit() {
    this.dataLoad();




  }

  dataLoad(){
    this.dataService.getProducts().subscribe({
      next:(dataProducts)=>{
        console.log(dataProducts)
        this.datos = dataProducts;
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
