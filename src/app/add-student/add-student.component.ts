import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private authservice:AuthService, private route:Router,private http:HttpClient){}
  ngOnInit():void{

  }
  studentForm=new FormGroup({
    name: new FormControl("",[Validators.required]),
    fname: new FormControl("",[Validators.required]),
    class: new FormControl("",[Validators.required]),
    addmission: new FormControl("",[Validators.required]),
    house: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    contact: new FormControl("",[Validators.required]),
    address: new FormControl("",[Validators.required]),
  });

  studentSubmitted():void{
    this.authservice.savestudentDetails(this.studentForm.value).subscribe((result)=>{
      console.log(result);
      this.studentForm.reset();
      window.alert("student sucessfully");
      
    }
  );
    console.log(this.studentForm.value);
    
  }


  get name(){
    return this.studentForm.get('name')
  }
  get fname(){
    return this.studentForm.get('fname')
  }
  get email(){
    return this.studentForm.get('email')
  }
  get contact(){
    return this.studentForm.get('contact')
  }
  get class(){
    return this.studentForm.get('class')
  }
  get addmission(){
    return this.studentForm.get('addmission')
  }
  get house(){
    return this.studentForm.get('house')
  }
  get address(){
    return this.studentForm.get('address')
  }
  
  

}
