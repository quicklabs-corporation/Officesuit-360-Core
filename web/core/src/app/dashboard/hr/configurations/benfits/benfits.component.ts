import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ql-benfits',
  templateUrl: './benfits.component.html',
  styleUrls: ['./benfits.component.less']
})
export class BenfitsComponent implements OnInit {
  benefits: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
