import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit} from "@angular/core";
import {DayPilot, DayPilotCalendarComponent} from "daypilot-pro-angular";
import {DataService} from "./data.service";{}

@Component({
  selector: 'app-table-time',
  template: `<daypilot-calendar [config]="config" [events]="events" #calendar></daypilot-calendar>`,//templateUrl: './table-time.component.html',
  styleUrls: ['./table-time.component.css']

  /***
   *  selector: 'calendar-component',
  template: `<daypilot-calendar [config]="config" [events]="events" #calendar></daypilot-calendar>`,
  styles: [``]
   */
})
export class TableTimeComponent implements AfterViewInit { //AfterViewInit, ,OnInit

  @ViewChild("calendar", {static: false})
  calendar!: DayPilotCalendarComponent;

  events: any[] = [];

  config: DayPilot.CalendarConfig = {
    viewType: "Week",
    headerDateFormat: "ddd",
    cellHeight: 50,
    eventArrangement: "Full",
    timeRangeSelectedHandling: "Enabled",
    onTimeRangeSelected: async (args) => {
      const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
      const dp = args.control;
      console.log("from= ", args.start);
      console.log("to= ", args.end);
      dp.clearSelection();
      if (modal.canceled) { return; }
      dp.events.add({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result
      });
      
    },
    eventDeleteHandling: "Update", 
    eventMoveHandling: "Update",
    onEventMoved: (args) => {
      args.control.message("Event moved: " + args.e.text());
    },
    eventResizeHandling: "Update",
    onEventResized: (args) => {
      args.control.message("Event resized: " + args.e.text());
    },
    eventClickHandling: "Disabled",
    eventHoverHandling: "Disabled",
  };

  constructor(private ds: DataService) { }
  ngAfterViewInit(): void {
    var from = this.calendar.control.visibleStart();
    var to = this.calendar.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
      console.log(result); /**** */
    });
  }
  // ngOnInit(): void {
  // }

}
