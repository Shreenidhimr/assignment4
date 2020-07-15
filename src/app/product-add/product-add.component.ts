import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
 list:Product[];
 prod:Product;
 
  constructor() {
    this.prod={pid:null,pname:'',price:null,stock:null}
   }
   AddProduct()
   {
     this.list.push(this.prod);
     this.cleanTemp();
     
   }
   cleanTemp()
   {
    this.prod={pid:null,pname:'',price:null,stock:null}
   }

  ngOnInit(): void {
  }

}
