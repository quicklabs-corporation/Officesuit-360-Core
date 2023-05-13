import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesComponent } from './entities.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EntitiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EntitiesRoutingModule
  ]
})
export class EntitiesModule { }
