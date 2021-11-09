import { Component, OnInit } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { NewChatService } from './new-chat.service';

@Component({
  selector: 'ql-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.less']
})
export class NewChatComponent implements OnInit {
  visible = false;
  constructor(private newChatService: NewChatService) { }

  ngOnInit(): void {
    this.newChatService.listenToAction().subscribe(value => {
      if (!this.visible) {
        this.open();
      }
    })
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}

