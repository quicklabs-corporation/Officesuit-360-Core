import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConditionType, FlowItem, IFlowItem, ItemTypes } from './item.model';

@Component({
  selector: 'ql-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {
  @Input() data!: IFlowItem;
  @Input() index!: number;
  itemTypes: typeof ItemTypes = ItemTypes;
  condition: typeof ConditionType = ConditionType;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() view: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getId(id: any): string {
    return `qlitem${this.data?.id}-arrow${id}`;
  }

  addItem(type: ItemTypes, parentId: number, description: string): void {
    this.add.emit({ type, description, parentId });
  }

  removeItem(id: number) {
    this.remove.emit({ id })
  }

  viewItem(id: any) {
    this.view.emit({ id });
  }
}
