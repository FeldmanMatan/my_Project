
import { Component, OnInit } from '@angular/core';
import {userService} from '../user.service';
import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private server:ServerService, private user:userService) { 

    
  }
  //public Temp: TempServiceService, public Auth: AuthService
  // student= {
  //   firstName: '',
  //   lastName: '',
  //   password:'',
  //   confirmPassword:'',
  //   email: '',
  //   phone:'',
  // }

  ngOnInit(): void {
  }

  error="";
  sucess="";

  loginStudent(event:any){
    const target= event.target;
    
    this.user.Student.email=target.querySelector('#email').value;
    this.user.Student.password=target.querySelector('#password').value;
    console.log('email=', this.user.Student.email);
    console.log('password=', this.user.Student.password);
    var data_for_server = {email:this.user.Student.email, password:this.user.Student.password} 
    this.server.insert(data_for_server).subscribe(
      (response)=>{
         console.log(response)
        },
      (error)=> console.log(error)
    );

  
  }
 
  }
   
   
