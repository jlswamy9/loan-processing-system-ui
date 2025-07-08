import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserByUserNameAndPassword(name:string,password:string):Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+"?name="+name+"&password="+password);
  }
  isUserLoggedin():boolean{
    return typeof window !== 'undefined' && !!localStorage.getItem('user');
  }

  logout(){
    localStorage.removeItem("user");
  }
}
