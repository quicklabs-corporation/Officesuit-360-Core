import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ql-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.less']
})
export class ConversationsComponent implements OnInit {
  type = 'chat';
  constructor() { }

  ngOnInit(): void {
  }

}
