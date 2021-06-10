import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import {userService} from './user.service';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
//import { map, catchError} from 'rxjs/operators';

import { from, Observable, throwError } from 'rxjs';
import { catchError, retry,  map, tap } from 'rxjs/operators';
import { LogInComponent } from './log-in/log-in.component';

import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  baseURL: string = "http://first-flask-server.herokuapp.com";

  constructor(private http: HttpClient, private user: userService) {

   }

   insert(student:any){
    let  a= this.http.post('http://first-flask-server.herokuapp.com/login',this.user.Student);
    console.log('from server=>   '+a);
     return a;
   }
    
   //registration_student
   registration_student(student:any){
    let s= this.http.post(this.baseURL+'/register',this.user.Student); 
    //let  a= this.http.post('http://first-flask-server.herokuapp.com/login',this.user.Student);
    console.log('from server=>   '+s);
     return s;
   }

   insertData(obj:any){
    let  a= this.http.post('http://first-flask-server.herokuapp.com/test_data_from_client',obj);
    console.log('from server=>   '+a);
     return a;
   }

   getOutStudents(student:any):Observable<any>{
     let s= this.http.get(this.baseURL+'/get_users_names'); 
     console.log('from server=>   '+s);
     return s;
   }

   OutPutStudentDeatails(name:any){
   // console.log('from server=>   '+student);
    var data_to_server = name;
     let a= this.http.post(this.baseURL+'/getuserbyname',data_to_server);
     console.log('from server=>   '+a);
     return a;
   }

   activate_GA(data:any){
    let  a= this.http.post(this.baseURL+'/activate_GA',data);//{data_to_server_name,data_to_server_course}
    console.log('from server=>   '+a);
     return a;    //'/activate_GA'
   }

   public send_id_and_course_to_GA(id:any, course:any):Observable<any>{
    var body = {'id':id, 'course':course}
    return this.http.post(this.baseURL+'activate_GA',body)
  }

   getEvents(from: any , to: any){
   return this.http.post('http://127.0.0.1:5000',from,to);}

   

  

   

}
