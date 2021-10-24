import { Component, Input, OnInit } from '@angular/core';
import { ConditionType } from '../item/item.model';

@Component({
  selector: 'ql-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.less']
})
export class ArrowComponent implements OnInit {
  @Input() data: any;
  condition: typeof ConditionType = ConditionType;
  constructor() { }

  ngOnInit(): void {
  }
}
