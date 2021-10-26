import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ql-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.less']
})
export class MailboxComponent implements OnInit {
  boxtype: string = 'inbox';
  constructor() { }

  ngOnInit(): void {
  }

}
