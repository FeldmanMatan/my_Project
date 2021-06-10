import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { newArray, stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})



export class DataService {
  testing:string = "testing console log from service"
  clicked:boolean[] = new Array(64); //hours constraints

  constructor(private http: HttpClient) { }


  get_window(id: number) {
    return this.clicked[id];
  }
  set_window(id: number) {
    this.clicked[id] = !this.clicked[id];
  }
  set_window_bool(id: number, bool: boolean) {
    this.clicked[id] = bool;
  }






  baseURL:string = "https://first-flask-server.herokuapp.com/"; /// for deploymnet env
  //baseURL:string = "http://127.0.0.1:5000/"; /// for production env
  
  test_data_for_server = {name:"admin", password:"12345"};
  
  public send_login_to_server():Observable<any>{
  var temp;
  const headers = { 'content-type': 'application/json'}  
  const body = JSON.stringify(this.test_data_for_server)
  return this.http.post(this.baseURL+'admin_login',this.test_data_for_server,{'headers':headers, observe:'response' as 'body'});
  ///return this.http.get(this.baseURL+"get_department");
  
  }
  public recive_list_of_tutors_from_server():Observable<any>{
  return this.http.get(this.baseURL+'get_users_names')
  }

  public send_id_and_course_to_GA(id:any, course:any):Observable<any>{ /****matan */
    var body = {'id':id, 'course':course}
    return this.http.post(this.baseURL+'activate_GA',body)
  }

  public get_user_info_by_id(user_id:any):Observable<any>{
    var body = {"id":user_id};
    return this.http.post(this.baseURL+'getuserbyid',body)
  }

  public get_course_list():Observable<any>{
    return this.http.get(this.baseURL+'get_courses')
  }


  public send_courses_constraits_to_server(user_id:string,course_list:any):Observable<any>{
    var data_to_send ={}
    var temp_arr = []
    for (var i=0;i<course_list.length;i++){
      temp_arr.push(course_list[i]["course"])
    }
    data_to_send = {id:user_id,course_list:temp_arr}
    return this.http.put(this.baseURL+'update_user_course_constraits', data_to_send)
  }




  public send_days_constraits_to_server(user_id:string):Observable<any>{
    
    //var id ="279061648"
    var data_to_send ={}//{id:"", days_to_change:[]}
    var temp_days = []
    var days_to_change={} //{day:"",hours:[]}
    let hours_to_change = []
    var day_flag = false
    for(var i=0;i<12;i++)
      {
        if(i==0&&this.clicked[i]==true){day_flag=true;hours_to_change.push(1)}
        if(i>0&& i<=12&&this.clicked[i]==true)
        {
            day_flag=true
            hours_to_change.push(i+1)
        }
  
      }
    if (day_flag==true)
        {
           days_to_change = {day:"sunday",hours:hours_to_change}
           temp_days.push(days_to_change)
        }
    day_flag=false
    hours_to_change = []  
      for(var i=13;i<25;i++)
      {
        if(i==13&&this.clicked[i]==true){day_flag=true;hours_to_change.push(1)}
        if(i>13&& i<=25&&this.clicked[i]==true)
        {
            day_flag=true
            hours_to_change.push(i-12)
        }
  
      }
    if (day_flag==true)
        {
           days_to_change = {day:"monday",hours:hours_to_change}
           temp_days.push(days_to_change)
        }
    day_flag=false
    hours_to_change = []  
        for(var i=26;i<38;i++)
      {
        if(i<=38&&this.clicked[i]==true)
        {
            day_flag=true
            hours_to_change.push(i-25)
        }
  
      }
    if (day_flag==true)
        {
           days_to_change = {day:"tuesday",hours:hours_to_change}
           temp_days.push(days_to_change)
        }
    day_flag=false
    hours_to_change = []  
          for(var i=39;i<51;i++)
      {
        if(i<=51&&this.clicked[i]==true)
        {
            day_flag=true
            hours_to_change.push(i-38)
        }
  
      }
    if (day_flag==true)
        {
           days_to_change = {day:"wednesday",hours:hours_to_change}
           temp_days.push(days_to_change)
        }
    day_flag=false
    hours_to_change = [] 
    for(var i=52;i<64;i++)
      {
        if(i<=64&&this.clicked[i]==true)
        {
            day_flag=true
            hours_to_change.push(i-51)
        }
  
      }
    if (day_flag==true)
        {
           days_to_change = {day:"thursday",hours:hours_to_change}
           temp_days.push(days_to_change)
        }
    day_flag=false
    hours_to_change = [] 
    data_to_send = {id:user_id,days_to_change:temp_days}
    
    
    console.log(data_to_send)
    
    return this.http.put(this.baseURL+"update_user_hours_constraits", data_to_send)
  }
}

