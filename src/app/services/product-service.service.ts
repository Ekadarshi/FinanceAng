
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {IProd} from './../model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url='http://localhost/NewProductWebApi/api/products/';
  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
    constructor(private http:HttpClient) { }
  
    getProductList(): Observable<any[]>{
      return this.http.get<any[]>(this.url+"getproducts");
    }

    getData(id:number):Observable<IProd>{
      return this.http.get<IProd>(this.url+"getproduct/"+id);
    }
}


