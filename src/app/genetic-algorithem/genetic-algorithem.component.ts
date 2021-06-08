import { Component, OnInit } from '@angular/core';
////
//import { FormControl, Validators } from "@angular/forms";
//import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';
import { ServerService } from '../server.service';
import {userService} from '../user.service';
//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-genetic-algorithem',
  templateUrl: './genetic-algorithem.component.html',
  styleUrls: ['./genetic-algorithem.component.css']
})
export class GeneticAlgorithemComponent implements OnInit {

  title = 'CheckList for Parents and Child Structure with Expand/ Collapse';
  form:FormGroup;
  days=[65];
  data: any;
 
  // form: FormGroup;
  // Data: Array<any> = [
  //   { name: 'Sunday', value: 'Sunday' },
  //   { name: 'Monday', value: 'Monday' },
  //   { name: 'Tuesday', value: 'Tuesday' },
  //   { name: 'Wednesday', value: 'Wednesday' },
  //   { name: 'Thursday', value: 'Thursday' }
  // ];

  // Hours: Array<any>=[
  //  { name:'08:00', value:'08:00'},
  //  { name:'09:00', value:'09:00'},
  //  { name:'10:00', value:'10:00'},
  //  { name:'11:00', value:'11:00'},
  //  { name:'12:00', value:'12:00'},
  //  { name:'13:00', value:'13:00'},
  //  { name:'14:00', value:'14:00'},
  //  { name:'15:00', value:'15:00'},
  //  { name:'16:00', value:'16:00'},
  //  { name:'17:00', value:'17:00'}
  // ]
 
  constructor(private fb: FormBuilder ,private server:ServerService, private user:userService ) { ///private fb: FormBuilder

    this.form = this.fb.group({
      days: this.fb.array([], [Validators.required])
             });
            this.data = {};
            this.data.isAllSelected = false;
            this.data.isAllCollapsed = false;
            
            //List object having hierarchy of parents and its children
            this.data.ParentChildchecklist = [
              {
                id: 61,value: 'Sunday',isSelected: false,isClosed:true,
                childList: [
                  {
                    id: 1,parent_id: 61,value: '08:00',isSelected: false
                  },
                  {
                    id: 2,parent_id: 61,value: '09:00',isSelected: false
                  },
                  {
                    id: 3,parent_id: 61,value: '10:00',isSelected: false
                  },
                  {
                    id: 4,parent_id: 61,value: '11:00',isSelected: false
                  },
                  {
                    id: 5,parent_id: 61,value: '12:00',isSelected: false
                  },
                  {
                    id: 6 ,parent_id: 61,value: '13:00',isSelected: false
                  },
                  {
                    id: 7,parent_id: 61,value: '14:00',isSelected: false
                  },
                  {
                    id: 8,parent_id: 61,value: '15:00',isSelected: false
                  },
                  {
                    id: 9,parent_id: 61,value: '16:00',isSelected: false
                  },
                  {
                    id: 10 ,parent_id:61,value: '17:00',isSelected: false
                  },
                  {
                    id: 11 ,parent_id:61,value: '18:00',isSelected: false
                  },
                  {
                    id: 12 ,parent_id:61,value: '19:00',isSelected: false
                  }
                ]
              },
              {
                id: 62,value: 'Monday',isSelected: false,isClosed:true,
                childList: [
                  {
                    id: 13,parent_id: 62,value: '08:00',isSelected: false
                  },
                  {
                    id: 14,parent_id: 62,value: '09:00',isSelected: false
                  },
                  {
                    id: 15,parent_id: 62,value: '10:00',isSelected: false
                  },
                  {
                    id: 16,parent_id: 62,value: '11:00',isSelected: false
                  },
                  {
                    id: 17,parent_id: 62,value: '12:00',isSelected: false
                  },
                  {
                    id: 18 ,parent_id: 62,value: '13:00',isSelected: false
                  },
                  {
                    id: 19,parent_id: 62,value: '14:00',isSelected: false
                  },
                  {
                    id: 20,parent_id: 62 ,value: '15:00',isSelected: false
                  },
                  {
                    id: 21,parent_id: 62 ,value: '16:00',isSelected: false
                  },
                  {
                    id: 22 ,parent_id: 62 ,value: '17:00',isSelected: false
                  },
                  {
                    id: 23 ,parent_id: 62 ,value: '18:00',isSelected: false
                  },
                  {
                    id: 24 ,parent_id: 62 ,value: '19:00',isSelected: false
                  }
                ]
              },
              {
                id: 63,value: 'Tuesday',isSelected: false,isClosed:true,
                childList: [
                  {
                    id: 25,parent_id: 63,value: '08:00',isSelected: false
                  },
                  {
                    id: 26,parent_id: 63,value: '09:00',isSelected: false
                  },
                  {
                    id: 27,parent_id: 63,value: '10:00',isSelected: false
                  },
                  {
                    id: 28,parent_id: 63,value: '11:00',isSelected: false
                  },
                  {
                    id: 29,parent_id: 63,value: '12:00',isSelected: false
                  },
                  {
                    id: 30 ,parent_id: 63,value: '13:00',isSelected: false
                  },
                  {
                    id: 31,parent_id: 63,value: '14:00',isSelected: false
                  },
                  {
                    id: 32,parent_id: 63,value: '15:00',isSelected: false
                  },
                  {
                    id: 33,parent_id: 63,value: '16:00',isSelected: false
                  },
                  {
                    id: 34 ,parent_id:63,value: '17:00',isSelected: false
                  },
                  {
                    id: 35 ,parent_id:63,value: '18:00',isSelected: false
                  },
                  {
                    id: 36 ,parent_id:63,value: '19:00',isSelected: false
                  }
                ]
              },
              {
                id: 64,value: 'Wednesday',isSelected: false,isClosed:true,
                childList: [
                  {
                    id: 37,parent_id: 64,value: '08:00',isSelected: false
                  },
                  {
                    id: 38,parent_id: 64,value: '09:00',isSelected: false
                  },
                  {
                    id: 39,parent_id: 64,value: '10:00',isSelected: false
                  },
                  {
                    id: 40,parent_id: 64,value: '11:00',isSelected: false
                  },
                  {
                    id: 41,parent_id: 64,value: '12:00',isSelected: false
                  },
                  {
                    id: 42 ,parent_id: 64,value: '13:00',isSelected: false
                  },
                  {
                    id: 43,parent_id: 64,value: '14:00',isSelected: false
                  },
                  {
                    id: 44,parent_id: 64,value: '15:00',isSelected: false
                  },
                  {
                    id: 45,parent_id: 64,value: '16:00',isSelected: false
                  },
                  {
                    id: 46 ,parent_id: 64,value: '17:00',isSelected: false
                  },
                  {
                    id: 47 ,parent_id: 64,value: '18:00',isSelected: false
                  },
                  {
                    id: 48 ,parent_id: 64,value: '19:00',isSelected: false
                  }
                ]
              },
              {
                id: 65,value: 'Thursday',isSelected: false,isClosed:true,
                childList: [
                  {
                    id: 49,parent_id: 65,value: '08:00',isSelected: false
                  },
                  {
                    id: 50,parent_id: 65,value: '09:00',isSelected: false
                  },
                  {
                    id: 51,parent_id: 65,value: '10:00',isSelected: false
                  },
                  {
                    id: 52,parent_id: 65,value: '11:00',isSelected: false
                  },
                  {
                    id: 53,parent_id: 65,value: '12:00',isSelected: false
                  },
                  {
                    id: 54 ,parent_id: 65,value: '13:00',isSelected: false
                  },
                  {
                    id: 55,parent_id: 65,value: '14:00',isSelected: false
                  },
                  {
                    id: 56,parent_id: 65,value: '15:00',isSelected: false
                  },
                  {
                    id: 57,parent_id: 65,value: '16:00',isSelected: false
                  },
                  {
                    id: 58 ,parent_id: 65,value: '17:00',isSelected: false
                  },
                  {
                    id: 59 ,parent_id: 65,value: '18:00',isSelected: false
                  },
                  {
                    id: 60 ,parent_id: 65,value: '19:00',isSelected: false
                  }
                ]
              },
            ];

    
   }

  //  onCheckboxChange(e:any) {
  //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  //  // const HoursArray: FormArray = this.form.get('HoursArray') as FormArray;
   

  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
      


  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item) => {  //item: FormControl
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  // submitForm() {
  //   console.log(this.form.value)
  // }

  //Click event on parent checkbox  
  parentCheck(parentObj:any) {
    for (var i = 0; i < parentObj.childList.length; i++) {
      parentObj.childList[i].isSelected = parentObj.isSelected;
      
    
    }
  }

  //Click event on child checkbox  
  childCheck(parentObj:any, childObj:any) {
   
    parentObj.isSelected = childObj.every(function (itemChild: any) {
      
      return   itemChild.isSelected == true; //==
    })
    
  }//every

  
  //Click event on master select
  selectUnselectAll(obj:any) {
    obj.isAllSelected = !obj.isAllSelected;
    for (var i = 0; i < obj.ParentChildchecklist.length; i++) {
      obj.ParentChildchecklist[i].isSelected = obj.isAllSelected;
      for (var j = 0; j < obj.ParentChildchecklist[i].childList.length; j++) {
        obj.ParentChildchecklist[i].childList[j].isSelected = obj.isAllSelected;
      }
    }
  }

  //Expand/Collapse event on each parent
  expandCollapse(obj:any){
    obj.isClosed = !obj.isClosed;
  }

  //Master expand/ collapse event
  expandCollapseAll(obj:any){
    for (var i = 0; i < obj.ParentChildchecklist.length; i++) {
      obj.ParentChildchecklist[i].isClosed = !obj.isAllCollapsed;
    }
    obj.isAllCollapsed = !obj.isAllCollapsed;
  }

  //Just to show updated JSON object on view
  stringify(obj:any) {
   
                     /***********************חשוב חשוב חשוב */
    //console.log(this.data.ParentChildchecklist[0].childList); /*****************חשוב חשוב חשוב */
    for(var i=0;i<6;i++)
   {
     //for(var j=0;j<13;j++)
     //{
      this.days[i]=this.data.ParentChildchecklist[i];
      console.log( this.days[i]);
    // var result= (this.days).map(day=>({id:this.days[0].toString,Boolean:this.days}));
    // console.log(result);
    // }
   } // this.days//this.data.ParentChildchecklist
    var data_for_server = {data:this.days} 
    this.server.insertData(data_for_server).subscribe(
      (response)=>{
         console.log(response)
        },
      (error)=> console.log(error)
    );
   ////////////////////// 
   // console.log(obj);
/////  //////////////////  
    
    return JSON.stringify(obj);
    
  }

  // submit(obj:any)
  // { var a=0;
   
  //     console.log("wellcome to submit")
  //     for (var i = 0; i < obj.ParentChildchecklist.length; i++) {
       
  //       for (var j = 0; j < obj.ParentChildchecklist[i].childList.length; j++) {
  //         this.days[a]=obj.ParentChildchecklist[i].childList[j].isSelected;
  //         a++;
  //       }
  //     }
  //     console.log(a);
     
  //       console.log("goodBay to submit")
   
  // }
  ngOnInit(): void {
  }
}
  // ngOnInit(): void {
  // }


