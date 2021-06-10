import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent} from './registration/registration.component';
import { AdminComponent} from './admin/admin.component';

import {RouterModule,ROUTES} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';

import { MatTableModule } from '@angular/material/table';

import {userService} from './user.service'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';



import {DayPilotModule} from "daypilot-pro-angular";

/**** */

import { from } from 'rxjs';
import { StudentScreenComponent } from './student-screen/student-screen.component';
import { ToturScreenComponent } from './totur-screen/totur-screen.component';
import {DataService} from './data.service';
import { LogInAdmainComponent } from './log-in-admin/log-in-admin.component';
import { GeneticAlgorithemComponent } from './genetic-algorithem/genetic-algorithem.component';
import { GenAlgorithemComponent } from './gen-algorithem/gen-algorithem.component';
import { ConstDialogComponent } from './const-dialog/const-dialog.component';
import { DayConstDialogComponent } from './day-const-dialog/day-const-dialog.component';
import { UserConstraintsComponent } from './user-constraints/user-constraints.component';
import { ServerService } from './server.service';




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    AdminComponent,
    StudentScreenComponent,
    ToturScreenComponent,
    LogInAdmainComponent,
  
    //GeneticAlgorithmComponent,
    GeneticAlgorithemComponent,
       GenAlgorithemComponent,
       ConstDialogComponent,
       DayConstDialogComponent,
       UserConstraintsComponent,
    
    // TreeModule
 
  ],

  /**** */
  providers:    [userService,DataService,ServerService ], //////////
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
    DayPilotModule,
    MatDialogModule,
    MatTableModule,

    // NgForm,
    RouterModule.forRoot([
      {
        path:'',
        component:RegistrationComponent
      },
      {
        path: 'login',
        component: LogInComponent
      },
      {
        path: 'logIn admin',
        component:LogInAdmainComponent
      },
     
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
      {
        path: 'matchStudent',
       component : GenAlgorithemComponent,
      },
      {
        path: 'userConstrain',
        component: UserConstraintsComponent,
      },
         {
        path: 'selectTime',
        component:DayConstDialogComponent,
      },
         {
        path: 'constDialog',
        component:ConstDialogComponent,
      },
       
      
  
    ]),/***/
  ],
 //
})
export class AppModule { }
