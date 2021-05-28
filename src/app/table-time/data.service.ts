import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DayPilot, DayPilotModule} from "daypilot-pro-angular";
import {HttpClient} from "@angular/common/http";
import {ServerService} from "../server.service";
// //import { time } from "console";
// import { event } from "jquery";

@Injectable()
export class DataService {

  events: any[] = [
    {
      id: "1",
      start: DayPilot.Date.today().addHours(10),
      end: DayPilot.Date.today().addHours(12),
      text: "Event 1"
    }
  ];

  constructor(private http : HttpClient , private server: ServerService){
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    console.log("from= ", from);
    console.log("to= ", to);
    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

   
    this.server.getEvents(from,to).subscribe(any=>{
      from;
      to;
    });
    

  

   

    



    // this.server.logInStudent(student).subscribe(student=>{
    //   this.student.email;
    //  this.student.password;

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

}
