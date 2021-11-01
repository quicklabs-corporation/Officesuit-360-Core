import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ql-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.less']
})
export class InfoAlertComponent implements OnInit {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() description!: string;
  @Input() heading!: string;
  constructor() { }

  ngOnInit(): void {
  }

  afterClose(): void {
    console.log('close');
  }
}
