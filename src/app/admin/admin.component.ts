import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {userService} from '../user.service';
import {ServerService} from '../server.service';
import {HttpResponse} from '@angular/common/http'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  
  loading: boolean = false;
  errorMessage='';
  constructor(private server:ServerService, private user:userService) { }

  ngOnInit(): void {
  }
students=[];

public getStudent(){
  this.loading=true;
  this.errorMessage="";
  this.server.getOutStudents(this.user.Student.firstName)
  .subscribe(
    (response)=>{
      console.log('response received')
        this.user.Student = response;
        console.log(this.user.Student);
        
    },
    ()=>{
      console.error('Request completed')      //This is actually not needed 
        this.loading = false; 
    }
  )
}

studentDetails(event:any){
  const target= event.target;
 // this.user.Student.name=target.querySelector('#name').value;//matan
  
  console.log('name =', this.user.Student.firstName);
  var data_to_server = {name:target.querySelector('#name').value} //name:target.querySelector('#name').value
  console.log(' data_to_server =', data_to_server);
  this.server.OutPutStudentDeatails(data_to_server).subscribe(
   (response)=> console.log(response),
    (error)=> console.log(error)
  );

}
GaDetails(event:any){
  const target= event.target;
  // this.user.Student.name=target.querySelector('#name').value;
  // this.user.Student.courseProvided=target.querySelector('#course').value;
  var data_to_server_name={name:target.querySelector('#name').value}; //{name:target.querySelector('#name').value}
  var data_to_server_course={course:target.querySelector('#course').value};
  var data_to_database={name:target.querySelector('#name').value,course:target.querySelector('#course').value }
  console.log('name =', data_to_server_name);
  console.log('course =', data_to_server_course);
  //var a="";
  this.server.activate_GA(data_to_database).subscribe( ///data_to_server_name,data_to_server_course
    (response)=> console.log(response),
    (error)=> console.log(error), 
 
  );

}
  
  // (event:any){
  // const target= event.target;
  // this.user.Student.email=target.querySelector('#name').value;
  
  // console.log('name =', this.user.Student.name);

  // this.server.OutPutStudentDeatails(this.user.Student.name).subscribe(
  //   (response)=> console.log(response),
  //   (error)=> console.log(error)
  // );

}
//   getAllStudents(){
//     this.user.getStudent().subscribe(
//       (response: Response)=>{
//         let data= response.json();
//         this.students=data;
//       },
//       (error)=>console.log(error)   );
//   }
 
