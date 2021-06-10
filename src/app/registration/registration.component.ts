
import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {userService} from '../user.service';


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

  //  student= {
  //   firstName: '',
  //   lastName: '',
  //   password:'',
  //   confirmPassword:'',
  //   email: '',
  //   phone:'',
  // }

 type: any;
/***public Temp: TempServiceService */
  constructor( private server:ServerService, private user:userService) { 
  
  }


  ngOnInit(): void {
  }


  StudentRegistration(event : any){

    // event.prevetDefult();
    const target= event.target
    // const email= target.querySelector('#email').value
   // this.type=  $('input[name=Tutor/Student]:checked', '#Tutor/Student').val()
   //this.type=target.querySelector('#Tutor/Student').value;
   var type = $("input[type='radio']:checked").val();
   console.log('Tutor/Student=   '+ this.type);
  
   // this.student.email=target.querySelector('#email').value;
    this.user.Student.password=target.querySelector('#password').value;
    this.user.Student.email=target.querySelector('#email').value;
    this.user.Student.firstName=target.querySelector('#firstName').value;
    this.user.Student.lastName=target.querySelector('#lastName').value;
    this.user.Student.department=target.querySelector('#department').value;
    this.user.Student.phone=target.querySelector('#phone').value;
    this.user.Student.ID=target.querySelector('#ID').value;
    //this.Auth.getUserDetails(email, password);
//firstName,lastName,department,phone
    console.log('email=',  this.user.Student.email);
    console.log('password=', this.user.Student.password);
    console.log('firstName=', this.user.Student.firstName);
    console.log('lastName=', this.user.Student.lastName);
    console.log('department=', this.user.Student.department);
    console.log('phone=', this.user.Student.phone);
    console.log('ID=', this.user.Student.ID);

    var data_for_server = {
      id:this.user.Student.ID,
      firstName:this.user.Student.firstName,
      lastName:this.user.Student.lastName,
      password:this.user.Student.password,
      department:this.user.Student.department,
      email:this.user.Student.email, 
      phone:this.user.Student.phone,
      user_type: this.type
    } 
    this.server.registration_student(data_for_server).subscribe(
      (response)=>{
         console.log(response)
        },
      (error)=> console.log(error)
    );


    }

}


