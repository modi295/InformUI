import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

 
}
