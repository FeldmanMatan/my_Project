import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

import { map } from 'rxjs/operators'
import { Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-gen-algorithem',
  templateUrl: './gen-algorithem.component.html',
  styleUrls: ['./gen-algorithem.component.css']
})
export class GenAlgorithemComponent implements OnInit {
  matched_tutors:any = [];

  constructor( public dataService: DataService) { }

  ngOnInit(): void {
  }

  
  pass_name_and_course_to_server(event:any){
    const target= event.target;
    var id = target.querySelector('#id').value; 
    var course = target.querySelector('#course').value;  
    
    //this.dataService.send_name_and_course_to_GA(name, course).subscribe(data=>{
    //  console.log(data);
    //  this.matched_tutors = data;
    //})
  
    this.dataService.send_id_and_course_to_GA(id, course)
    .pipe(map(data => {
    const matched_tutor_array = [];
    for (const key in data) {
      matched_tutor_array.push({...data[key]})
    }  
    return matched_tutor_array;
    }))
    .subscribe(data=> {
      this.matched_tutors = data;
      console.log(this.matched_tutors)
  
      });
    }
  
  
    // return_to_dash(){
    //   this.router.navigate(["/dashboard"])
    // }
}
