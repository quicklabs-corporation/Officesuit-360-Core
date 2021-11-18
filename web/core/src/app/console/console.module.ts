import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { SharedModule } from '../shared/shared.module';
import { AppsComponent } from './apps/apps.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    AppsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
