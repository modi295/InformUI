import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authservice:AuthService, private route:Router,private http:HttpClient){}
  ngOnInit():void{

  }
  list = [
    {label: 'Male'},
    {label: 'Female'}
  ];
  registerForm=new FormGroup({
    user: new FormControl("",[Validators.required]),
    name: new FormControl("",[Validators.required]),
    date: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
   // phone: new FormControl("",[Validators.required]),
    gender: new FormControl("",[Validators.required]),
    department: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(32)])
  });;

  registerSubmitted():void{
    this.authservice.saveDetailsData(this.registerForm.value).subscribe((result)=>{
      console.log(result);
      this.registerForm.reset();
      window.alert("registered sucessfully");
      this.route.navigate(['login']);
    }
  );
    console.log(this.registerForm.value);
    
  }

  get user(){
    return this.registerForm.get('user')
  }
  get name(){
    return this.registerForm.get('name')
  }
  get gender(){
    return this.registerForm.get('gender')
  }
  get date(){
    return this.registerForm.get('date')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get department(){
    return this.registerForm.get('department')
  }
  get password(){
    return this.registerForm.get('password')
  }


}
