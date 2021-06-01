import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class userService {
  constructor(private http: HttpClient) { }

Student ={
  email:String,
  password:String,
  name:String,
  courseProvided:String,
  department:String,
  days:String
}

getStudent(){

  let s= this.http.get("https://first-flask-server.herokuapp.com/studen");
   return s;
}
 //return this.http.post('https://first-flask-server.herokuapp.com/login',Student);
}
