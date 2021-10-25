import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { ChatProfileComponent } from './chat-profile/chat-profile.component';
import { PeopleComponent } from './people/people.component';
import { PeoplelistitemComponent } from './peoplelistitem/peoplelistitem.component';


@NgModule({
  declarations: [
    ConnectComponent,
    ChatComponent,
    ChatProfileComponent,
    PeopleComponent,
    PeoplelistitemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConnectRoutingModule
  ]
})
export class ConnectModule { }
