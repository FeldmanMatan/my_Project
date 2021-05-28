import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent} from './registration/registration.component';
import { AdminComponent} from './admin/admin.component';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
// import {RouterModule} from '@angular/router';
import {RouterModule,ROUTES} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient } from '@angular/common/http';
/**** */



//import {AppComponent} from './app.component';
//import {CalendarModule} from '../app/table-time/calendar.module';
import {DataService} from "./table-time/data.service";

import {DayPilotModule} from "daypilot-pro-angular";

/**** */

import { from } from 'rxjs';
import { StudentScreenComponent } from './student-screen/student-screen.component';
import { ToturScreenComponent } from './totur-screen/totur-screen.component';
import { TableTimeComponent } from './table-time/table-time.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    AdminComponent,
    StudentScreenComponent,
    ToturScreenComponent,
    TableTimeComponent,
 
  ],

  /**** */
  providers:    [ DataService ],
  bootstrap: [AppComponent],
  // exports:      [  ], ///If 'app-table-tim' is an Angular component, then verify that it is part of this module
  
  /***** */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //CalendarModule,
    DayPilotModule,
    // NgForm,
    RouterModule.forRoot([
      {
        path: '',
        component:RegistrationComponent
      },
      {
        path: 'login',
        component: LogInComponent
      },
      // {
      //   path: '',
      //   component:AppComponent
      // },
     
      {
        path: 'admin',
        component:AdminComponent,
        // canActivate:[TempServiceService]

      },
      {
        path: 'student',
        component:  StudentScreenComponent,
      },
      {
        path: 'totur',
        component:ToturScreenComponent,
      },
      // {
      //   path: 'professional_details',
      //   component:ProfessionalDetailsComponent
      // },
      {
        path: 'tableTime',
        component:TableTimeComponent
      },
    ]),/***/
  ],
 
})
export class AppModule { }
