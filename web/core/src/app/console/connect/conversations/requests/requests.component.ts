import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ql-conversation-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.less']
})
export class RequestsComponent implements OnInit {
  requestStatus: string = 'all';
  constructor() { }

  ngOnInit(): void {
  }

}
