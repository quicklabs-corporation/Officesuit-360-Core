import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ql-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.less']
})
export class CustomIconComponent implements OnInit {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() small: boolean = true;
  srcImg!: string;
  constructor() { }

  ngOnInit(): void {
    this.srcImg = `/assets/icons/${this.src}.png`
  }

}
