import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userform!:FormGroup;
  records:User[]=[];
  searchbyemail:string='';
  founddata:User |null=null
  constructor(private service:UserService,private fb:FormBuilder){
   
    
 }
 ininit():void{ this.userform =this.fb.group({
  id:[null],

  name:['',[Validators.required,Validators.maxLength(20),Validators.minLength(5)]],
  email:['',[Validators.required,Validators.maxLength(20),Validators.minLength(5)]],
  password:['',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]]
})
}
  ngOnInit(): void {
    this.getalldata();
    this.ininit();
  }
  getalldata():void{
    this.service.onfetch().subscribe(data=>this.records=data);
  }

  postdata():void{
    const posting :User={...this.userform.value,id:this.getting()}
    this.service.onadd(posting).subscribe(()=>{
      this.getalldata();
    })
  }
  getting():number{
    return this.records.length>0?Math.max(...this.records.map((record)=>record.id || 0))+1:1;
  }
}
