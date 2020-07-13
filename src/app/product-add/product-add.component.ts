import { Component, OnInit } from '@angular/core';
import {Product} from './../product';
import { Router } from "@angular/router";
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  prod:Product;
  
   constructor(private router:Router) {
    this.prod={pid:null,pname:'',price:null,stock:null}
    }
    AddProduct()
    {
      
      localStorage.setItem("ndata",JSON.stringify(this.prod)); 
      this.router.navigateByUrl('list');

    }
    
    cleanTemp()
    {
     this.prod={pid:null,pname:'',price:null,stock:null}
    }
 
   ngOnInit(): void {
   }
}
