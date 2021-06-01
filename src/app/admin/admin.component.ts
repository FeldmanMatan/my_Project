import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {userService} from '../user.service';
import {ServerService} from '../server.service';
import {HttpResponse} from '@angular/common/http'

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
  this.server.getOutStudents(this.user.Student.name)
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
  this.user.Student.email=target.querySelector('#name').value;
  
  console.log('name =', this.user.Student.name);

  this.server.OutPutStudentDeatails(this.user.Student.name).subscribe(
    (response)=> console.log(response),
    (error)=> console.log(error)
  );

}
}
//   getAllStudents(){
//     this.user.getStudent().subscribe(
//       (response: Response)=>{
//         let data= response.json();
//         this.students=data;
//       },
//       (error)=>console.log(error)   );
//   }
 
