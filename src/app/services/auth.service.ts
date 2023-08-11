import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dashboard/details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url="https://localhost:7284/";

  saveDetailsData(data:any): Observable<any>{
    return this.http.post(this.url+'Registration', data);

  }
  checkData(data:any){
    return this.http.get(this.url+'Registration');

  }
  saveLoginData(data:any){
    return this.http.post(this.url+'Login',data);
  }
  savestudentDetails(data:any): Observable<any>{
    return this.http.post(this.url+'Student', data);
  }
  getUsers(): Observable < User[] > {  
    return this.http.get < User[] > (this.url+'Student');  
  }  
  

  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('token');

  }
  signout(){
    localStorage.clear();
  }
 

 
}
