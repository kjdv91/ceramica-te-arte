import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsResponse } from '../models/products-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlProducts:string = 'assets/datos.json';
  constructor(
    private http: HttpClient
  ) { }


  getProducts():Observable<ProductsResponse>{
    let url = this.urlProducts
    return this.http.get<ProductsResponse>(url);


  }
}
