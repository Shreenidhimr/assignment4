import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductAddComponent} from './product-add/product-add.component'
import{ProductListComponent} from './product-list/product-list.component'

const routes: Routes = [
  {path:'add',component:ProductAddComponent},
  {path:'list',component:ProductListComponent},
  {path:'',redirectTo:'add',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
