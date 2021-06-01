
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

    this.server.insert(this.user.Student).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    );

  
  }
  // loginUser(event : any){

  //   event.preventDefault();  /**** */
  //   const target= event.target
  //   this.student.email=target.querySelector('#email').value;
  //   this.student.password=target.querySelector('#password').value;
  //   console.log('email=', this.student.email);
  //   console.log('password=', this.student.password);

  //  this.server.logInStudent(this.student).subscribe(student=>{
  //     this.student.email;
  //    this.student.password;
   

  //   })
   // this.student.password=target.querySelector('#password').value;

    

  //   console.log('email=', this.student.email);
  //   console.log('password=', this.student.password);
  // }
  }
    // const email= target.querySelector('#email').value
    // const password= target.querySelector('#password').value

    

    // console.log('email=', email);
    // console.log('password=', password);
    

      // event.prevetDefult();
    
      // const email= target.querySelector('#email').value
      // const password= target.querySelector('#password').value
     


