import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { NewChatService } from '../shared/components/new-chat/new-chat.service';
import { NewMessageService } from '../shared/components/new-message/new-message.service';

@Component({
  selector: 'ql-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  constructor(private readonly router: Router) {
  }

  ngOnInit(): void { }
  
}
