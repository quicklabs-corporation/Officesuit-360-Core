import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
