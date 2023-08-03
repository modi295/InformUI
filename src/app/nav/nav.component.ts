import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private details:AuthService, private router:Router){}
  log():boolean{
    if(this.details.isLoggedIn()){
      return true;

    }else{
    return false;
    }
  }
  logOut(){
    this.details.signout();
    this.router.navigate(['login'])

 }
 getUser(){
  return localStorage.getItem('user');
}
}
