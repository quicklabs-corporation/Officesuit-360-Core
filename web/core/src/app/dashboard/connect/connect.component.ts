import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ql-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.less']
})
export class ConnectComponent implements OnInit {
  type: string = 'conversations';

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.redirect();
  }

  loadConversation(event: any) {
    this.type = event;
    this.redirect();
  }

  redirect(): void {
    this.router.navigate([`/dashboard/connect/${this.type}`]);
  }
}
