import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authservice:AuthService, private route:Router){ }

  loginForm= new FormGroup({
    user: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(32)])
  }
  )

  loginUser(){
    this.authservice.checkData(this.loginForm.value).subscribe((res:any)=>{
      const person =res.find((a:any)=>{
        return a.user === this.loginForm.value.user && a.password ===this.loginForm.value.password
      })
      if(person){
        this.authservice.saveLoginData(this.loginForm.value).subscribe((result:any)=>{
          localStorage.setItem("token",result.token);
          localStorage.setItem("user",result.insertlogin.user);
          console.log(result)
          this.loginForm.reset();
        }
        );
        alert('login succesful');
        this.loginForm.reset();
        
      }
      else{
        alert('user not found');
      }
    }
    );
    
  }
  get user(){
    return this.loginForm.get('user')
  }
  get password(){
    return this.loginForm.get('password')
  }


}

