import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatProfileComponent } from './common/chat-profile/chat-profile.component';
import { PeopleComponent } from './common/people/people.component';
import { PeoplelistitemComponent } from './common/peoplelistitem/peoplelistitem.component';
import { MailListItemComponent } from './common/mail-list-item/mail-list-item.component';
import { MailViewComponent } from './common/mail-view/mail-view.component';
import { ConnectCommonModule } from './common/connect-common.module';


@NgModule({
  declarations: [
    ConnectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConnectCommonModule,
    ConnectRoutingModule
  ]
})
export class ConnectModule { }
