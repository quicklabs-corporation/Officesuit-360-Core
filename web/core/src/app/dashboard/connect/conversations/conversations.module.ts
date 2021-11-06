import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationsComponent } from './conversations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnectCommonModule } from '../common/connect-common.module';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './messages/messages.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { NotesComponent } from './notes/notes.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RequestsComponent } from './requests/requests.component';
import { RemaindersComponent } from './remainders/remainders.component';
import { SnippetsComponent } from './snippets/snippets.component';


@NgModule({
  declarations: [
    ConversationsComponent,
    ChatComponent,
    MessagesComponent,
    DocumentsComponent,
    ProfileComponent,
    NotesComponent,
    MeetingsComponent,
    RequestsComponent,
    RemaindersComponent,
    SnippetsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConnectCommonModule,
    ConversationsRoutingModule
  ]
})
export class ConversationsModule { }
