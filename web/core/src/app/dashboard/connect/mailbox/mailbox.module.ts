import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailboxRoutingModule } from './mailbox-routing.module';
import { MailboxComponent } from './mailbox.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnectCommonModule } from '../common/connect-common.module';


@NgModule({
  declarations: [
    MailboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConnectCommonModule,
    MailboxRoutingModule
  ]
})
export class MailboxModule { }
