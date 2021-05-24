// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-log-in',
//   templateUrl: './log-in.component.html',
//   styleUrls: ['./log-in.component.css']
// })
// export class LogInComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { ServerService } from '../server.service';
// import { TempServiceService } from '../../services/temp-service.service';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private server:ServerService) { 

  }
  //public Temp: TempServiceService, public Auth: AuthService
  student= {
    firstName: '',
    lastName: '',
    password:'',
    confirmPassword:'',
    email: '',
    phone:'',
  }

  ngOnInit(): void {
  }

  
  
  loginUser(event : any){

    event.preventDefault();  /**** */
    const target= event.target
    // const email= target.querySelector('#email').value
    // const password= target.querySelector('#password').value

    // //this.Auth.getUserDetails(email, password);
    // console.log(email, password);

    // console.log('email=', email);
    // console.log('password=', password);
    

      // event.prevetDefult();
    
      // const email= target.querySelector('#email').value
      // const password= target.querySelector('#password').value
      this.student.email=target.querySelector('#email').value;
      this.student.password=target.querySelector('#password').value;

      this.server.logInStudent(this.student).subscribe(student=>{
        this.student.email;
        this.student.password;

      })
      this.student.password=target.querySelector('#password').value;
  
      //this.Auth.getUserDetails(email, password);
  
      console.log('email=', this.student.email);
      console.log('password=', this.student.password);
    }

}
