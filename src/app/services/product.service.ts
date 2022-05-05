import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = 'https://62739dbc345e1821b21e702c.mockapi.io/v1/api/'
  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(this.api + `Product`);
  }
}
