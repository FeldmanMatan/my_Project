
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // student= new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   email: new FormControl(''),
  //   phone:new FormControl(''),
  // })

   student= {
    firstName: '',
    lastName: '',
    password:'',
    confirmPassword:'',
    email: '',
    phone:'',
  }

 
/***public Temp: TempServiceService */
  constructor( ) { 
  
  }


  ngOnInit(): void {
  }


  loginUser(event : any){

    // event.prevetDefult();
    const target= event.target
    // const email= target.querySelector('#email').value
    // const password= target.querySelector('#password').value
    this.student.email=target.querySelector('#email').value;
    this.student.password=target.querySelector('#password').value;

    //this.Auth.getUserDetails(email, password);

    console.log('email=', this.student.email);
    console.log('password=', this.student.password);
    }

}


