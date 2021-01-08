import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ValidateComponent} from './admin/validate/validate.component';
import {ProductsComponent} from './admin/products/products.component';
const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'admin/validate',component:ValidateComponent},
  {path:'admin/products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
