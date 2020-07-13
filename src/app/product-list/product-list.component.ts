import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  list:Array<Product>
  prod:Product;
  product:Product;
  constructor(private router:Router) {
this.product={pid:null,pname:'',price:null,stock:null};
    this.prod=JSON.parse(localStorage.getItem("ndata"));
    
    this.product.pid=this.prod.pid;
    this.product.pname=this.prod.pname;
    this.product.price=this.prod.price;
    this.product.stock=this.prod.stock;
    
      
   }

       
      
    
  ngOnInit(): void {
  }

}
