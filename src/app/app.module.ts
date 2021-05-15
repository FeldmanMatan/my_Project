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


import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    AdminComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
      // {
      //   path: 'student',
      //   component:ScreenStudentComponent
      // },
      // {
      //   path: 'totur',
      //   component:ScreenToturComponent
      // },
      // {
      //   path: 'professional_details',
      //   component:ProfessionalDetailsComponent
      // },
      // {
      //   path: 'app-tabletime',
      //   component:TabletimeComponent
      // },
    ]),/***/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
