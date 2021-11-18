import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './connect.component';

const routes: Routes = [{
  path: '',
  component: ConnectComponent,
  children: [
    { path: '', redirectTo: 'conversations', pathMatch: 'full' },
    {
      path: 'conversations',
      loadChildren: () => import('./conversations/conversations.module').then(m => m.ConversationsModule)
    },
    {
      path: 'mail',
      loadChildren: () => import('./mailbox/mailbox.module').then(m => m.MailboxModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
