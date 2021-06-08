import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class userService {
  constructor(private http: HttpClient) { }

Student ={
  email:String,
  password:String,
  firstName:String,
  lastName:String,
  courseProvided:String,
  department:String,
  days:String,
  phone:String
}

getStudent(){

  // let s= this.http.get("https://first-flask-server.herokuapp.com/student");
  //  return s;
}
 //return this.http.post('https://first-flask-server.herokuapp.com/login',Student);
}
