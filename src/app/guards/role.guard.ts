import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {
  canActivate(){
    let role=localStorage.getItem("user")
    if(role =="Admin" || role =="Manager"){
      return true;
    }
    alert("you don't have admin/manager rights")
    return false;
  }
    
  }
  

