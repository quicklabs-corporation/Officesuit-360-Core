import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlowToolRoutingModule } from './flow-tool-routing.module';
import { FlowToolComponent } from './flow-tool.component';


@NgModule({
  declarations: [
    FlowToolComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlowToolRoutingModule
  ]
})
export class FlowToolModule { }
