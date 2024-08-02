import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  student:Registration=new Registration();
  loginform!:FormGroup;
  constructor(private service:RegistrationService,private form:FormBuilder){
    this.loginform=this.form.group({
      name:['',Validators.required,Validators.maxLength(10),Validators.minLength(4)],
      email:['',Validators.required,Validators.email],
      mobileno:['',Validators.required,Validators.maxLength(10),Validators.minLength(10)],
      password:['',Validators.required,Validators.pattern('/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g'),Validators.minLength(5),Validators.maxLength(10)]
    }
    )
  }
  ngOnInit():void{}
  submit():void{
    this.service.onsubmit(this.student).subscribe(
      response=>{
        console.log("registration success",response);  
        Swal.fire("Succesfully Inserted",'success','success'); 
      },
      error=>{
      console.error("error",error);
      Swal.fire("Error",'error','error');
    }
      
    )
  }
}
