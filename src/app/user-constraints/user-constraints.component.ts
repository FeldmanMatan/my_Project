import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { map } from 'rxjs/operators'
import { from, Observable, pipe } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ConstDialogComponent} from '../const-dialog/const-dialog.component';
import { DayConstDialogComponent } from '../day-const-dialog/day-const-dialog.component';
import {GeneticAlgorithemComponent} from '../genetic-algorithem/genetic-algorithem.component'

@Component({
  selector: 'app-user-constraints',
  templateUrl: './user-constraints.component.html',
  styleUrls: ['./user-constraints.component.css']
})
export class UserConstraintsComponent implements OnInit {

  constructor( public dataService: DataService,private dialog: MatDialog) { }

  show_user_flag = false;
  user_data_from_server:any = [];
  name_to_dialog="";
  courses=[];
  id_to_dialog="";

  user_department ="";
  user_current_courses:any
  user_current_days:any
  user_type=""

  show_info_flag = false

  ngOnInit(): void {
  }

  show_user_info(){
    this.show_info_flag = true
    }
  
  
    // return_to_dash(){
    //   this.router.navigate(["/dashboard"])
    // }
  
    service_activition(user_id:string){
  
    this.dataService.get_user_info_by_id(user_id)
    .pipe(map(data => {
      const matched_tutor_array = [];
      for (const key in data) {
        matched_tutor_array.push({...data[key]})
      }  
      return matched_tutor_array;
      }))
      .subscribe(data=> {
        console.log(data)
        this.user_data_from_server = data;
        if (this.user_data_from_server.length>1){this.show_user_flag = true;}
        else {this.show_user_flag=false;}
        this.name_to_dialog = data[0]["name"];
        this.user_department= data[1]["department"]
        this.user_current_courses = data[2]["courses"]
        this.user_current_days = data[3]["days"]
        this.user_type=data[5]["user_type"]
        });
   
      this.show_user_info()
    }
  
    pass_user_id_to_server(event:any){
    const target= event.target;
    var user_id = target.querySelector('#user_id').value;
    this.id_to_dialog = user_id;
    this.service_activition(user_id)
    this.show_user_info()
        
    }
  
     openDialog_change_courses() {
       console.log(" openDialog_change_courses");
  
      let dialogRef = this.dialog.open(GeneticAlgorithemComponent, {
        width: '2500px',
        height: '350px',
        data: {user_id:this.id_to_dialog, name: this.name_to_dialog, courses:this.courses},
      });
      dialogRef.afterClosed().subscribe(res=>{
      
      setTimeout(()=>{this.service_activition(this.id_to_dialog)},500) //wait for service to
      })
        
      }
    
  
    
   
  
    openDialog_change_days() {
      //change componentet to a new one
      let dialogRef = this.dialog.open(DayConstDialogComponent, {
        width: '1500px',
        height: '700px',
        data: {user_id:this.id_to_dialog, name: this.name_to_dialog, courses:this.courses},
      });
      dialogRef.afterClosed().subscribe(res=>{
        setTimeout(()=>{this.service_activition(this.id_to_dialog)},500) 
      })
    }

}
