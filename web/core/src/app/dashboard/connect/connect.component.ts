import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewChatService } from 'src/app/shared/components/new-chat/new-chat.service';
import { NewMessageService } from 'src/app/shared/components/new-message/new-message.service';

@Component({
  selector: 'ql-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.less']
})
export class ConnectComponent implements OnInit {
  type: string = 'conversations';

  constructor(private readonly router: Router,
    private readonly newChatService: NewChatService,
    private readonly newMessageService: NewMessageService) { }

  ngOnInit(): void {
    this.redirect();
  }

  createConversation() {
    this.newChatService.openNewChat();
  }

  composeMail() {
    this.newMessageService.openNewMessage();
  }

  loadConversation(event: any) {
    this.type = event;
    this.redirect();
  }

  redirect(): void {
    this.router.navigate([`/dashboard/connect/${this.type}`]);
  }
}
