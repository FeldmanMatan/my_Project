import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry,  map, tap } from 'rxjs/operators';
import { LogInComponent } from './log-in/log-in.component';
import { TableTimeComponent } from './table-time/table-time.component';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {

   }

   logInStudent(student: any){
     return this.http.post('http://127.0.0.1:5000/login',student);
   }

   getEvents(from: any , to: any){
    return this.http.post('http://127.0.0.1:5000/login',from,to);

   }

   

  

   

  //  logInStudent(student: any): Observable<any> {
  //   return this.http.post<any>('http://127.0.0.1:5000/login',student)
  //     .pipe(
  //       //catchError(this.handleError(' logInStudent', student))
  //     );

     
  // }
}
