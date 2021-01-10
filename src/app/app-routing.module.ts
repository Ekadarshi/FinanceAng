import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ValidateComponent} from './admin/validate/validate.component';
import {ProductsComponent} from './admin/products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'admin/validate',component:ValidateComponent},
  {path:'admin/products',component:ProductsComponent},
  {path:'product', component:ProductComponent},
  {path:'productdetails/:id', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
