import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {userService} from '../user.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

 
@Component({
  selector: 'app-log-in-admin',
  templateUrl: './log-in-admin.component.html',
  styleUrls: ['./log-in-admin.component.css']
})
export class LogInAdmainComponent implements OnInit {

  constructor(private server:ServerService, private user:userService,private router: Router,) { }


  error="";
  sucess="";

  loginStudent(event:any){
    const target= event.target;
    this.user.Student.email=target.querySelector('#email').value;
    this.user.Student.password=target.querySelector('#password').value;
        console.log('email=', this.user.Student.email);
    console.log('password=', this.user.Student.password);

    this.server.insert(this.user.Student).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
      )
    
    }

  ngOnInit(): void {
  }

}
