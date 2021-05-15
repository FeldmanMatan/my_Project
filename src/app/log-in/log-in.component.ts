// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-log-in',
//   templateUrl: './log-in.component.html',
//   styleUrls: ['./log-in.component.css']
// })
// export class LogInComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';
// import { TempServiceService } from '../../services/temp-service.service';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  // constructor(public Temp: TempServiceService, public Auth: AuthService) { }

  ngOnInit(): void {
  }

  
  
  loginUser(event : any){

    event.preventDefault();  /**** */
    const target= event.target
    const email= target.querySelector('#email').value
    const password= target.querySelector('#password').value

    //this.Auth.getUserDetails(email, password);
    console.log(email, password);

    console.log('email=', email);
    console.log('password=', password);
    }

}
