import { Component } from '@angular/core';

import {userService} from './user.service';
import {ServerService } from './server.service';
import { from } from 'rxjs';
import { StudentScreenComponent } from './student-screen/student-screen.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  // loading: boolean = false;
  // errorMessage='';
  student=[];

  constructor(private user : userService, private server:ServerService ){}
  
  // public getStudent(){
  //   this.loading=true;
  //   this.errorMessage="";
  //   this.server.getOutStudents(this.user.Student)
  //   .subscribe(
  //     (response)=>{
  //       console.log('response received')
  //         this.user.Student = response;
  //     },
  //     ()=>{
  //       console.error('Request completed')      //This is actually not needed 
  //         this.loading = false; 
  //     }
  //   )
  // }
  // ngOninit(){
    
  // }

  // getAllStudents(){
  //   this.user.getStudent().subscribe(
  //     (response: Response)=>{
  //       let data= response.json();
  //       this.students=data;
  //     },
  //     (error)=>console.log(error)   );
  // }

  };

