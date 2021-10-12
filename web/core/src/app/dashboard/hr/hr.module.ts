import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HrComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HrRoutingModule
  ]
})
export class HrModule { }
