import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationsComponent } from './conversations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnectCommonModule } from '../common/connect-common.module';


@NgModule({
  declarations: [
    ConversationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConnectCommonModule,
    ConversationsRoutingModule
  ]
})
export class ConversationsModule { }
