import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
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
    private readonly newMessageService: NewMessageService, private readonly hotkeysService: HotkeysService) { }

  ngOnInit(): void {
    this.addKeyboadShortCutToNewChat();
    this.addKeyboadShortCutToNewMessage();
  }

  addKeyboadShortCutToNewChat() {
    this.hotkeysService.add(new Hotkey('alt+shift+c', (event: KeyboardEvent): boolean => {
      this.newChatService.openNewChat();
      return false;
    }, undefined, 'Open New Conversation'));
  }

  addKeyboadShortCutToNewMessage() {
    this.hotkeysService.add(new Hotkey('alt+shift+m', (event: KeyboardEvent): boolean => {
      this.newMessageService.openNewMessage();
      return false;
    }, undefined, 'Compose Mail'));
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
    this.router.navigate([`/console/connect/${this.type}`]);
  }
}
