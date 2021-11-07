import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ql-conversation-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.less']
})
export class MeetingsComponent implements OnInit {
  date: Date = new Date();
  constructor() {}
  ngOnInit() {
    
  }

  getWeek(event: any):void {

  }
}
