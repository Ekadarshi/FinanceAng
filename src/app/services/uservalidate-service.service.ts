import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {IUser} from './../model/iuser';
@Injectable({
  providedIn: 'root'
})
export class UservalidateServiceService {
url='http://localhost/Finance/api/Admin/';
httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
constructor(private http:HttpClient) { }
getUserList():Observable<IUser[]>{
  return this.http.get<IUser[]>(this.url+"UserDetails")
}
}
