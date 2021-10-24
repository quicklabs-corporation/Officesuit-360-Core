import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlowToolRoutingModule } from './flow-tool-routing.module';
import { FlowToolComponent } from './flow-tool.component';
import { ItemComponent } from './item/item.component';
import { ArrowComponent } from './arrow/arrow.component';


@NgModule({
  declarations: [
    FlowToolComponent,
    ItemComponent,
    ArrowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlowToolRoutingModule
  ]
})
export class FlowToolModule { }
