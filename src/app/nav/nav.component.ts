import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private auth:AuthService, private router:Router){}
  log():boolean{
    if(this.auth.isLoggedIn()){
      return true;

    }else{
    return false;
    }
  }
  logOut(){
    this.auth.signout();
    this.router.navigate(['login'])

 }
 getUser(){
  return localStorage.getItem('user');
}
}
