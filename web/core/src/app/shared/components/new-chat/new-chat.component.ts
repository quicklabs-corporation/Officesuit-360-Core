import { Component, OnInit } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'ql-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.less']
})
export class NewChatComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  constructor(private hotkeysService: HotkeysService) {
    // Added shortcut key for new conversation
    this.hotkeysService.add(new Hotkey('alt+shift+c', (event: KeyboardEvent): boolean => {
      this.isVisible = true;
      return false; // Prevent bubbling
    }));
  }


  ngOnInit(): void {
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}

