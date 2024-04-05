import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {  BehaviorSubject } from 'rxjs';
import { ProductsResponse } from '../models/products-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlProducts:string = 'assets/datos.json';
  private productSource = new BehaviorSubject<any | null>(null);

  currentProduct = this.productSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }


  getProducts():Observable<ProductsResponse>{
    let url = this.urlProducts
    return this.http.get<ProductsResponse>(url);


  }


  changeProduct(product: any) {
    this.productSource.next(product);
  }
}
