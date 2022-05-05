import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = [];
  social: any = {};
  constructor(private productSvc: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productSvc.getProductList().subscribe(res=>{
      this.products = res;
    })
  }

}
