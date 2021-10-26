import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyprofileRoutingModule } from './myprofile-routing.module';
import { MyprofileComponent } from './myprofile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SummaryComponent } from './summary/summary.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { LeavePoliciesComponent } from './leave-policies/leave-policies.component';
import { CtcComponent } from './ctc/ctc.component';
import { AssetsAllocatedComponent } from './assets-allocated/assets-allocated.component';
import { PloanandCliamsComponent } from './ploanand-cliams/ploanand-cliams.component';
import { UserNoticesComponent } from './user-notices/user-notices.component';
import { OtherRequestsComponent } from './other-requests/other-requests.component';


@NgModule({
  declarations: [
    MyprofileComponent,
    SummaryComponent,
    FeedbacksComponent,
    LeavePoliciesComponent,
    CtcComponent,
    AssetsAllocatedComponent,
    PloanandCliamsComponent,
    UserNoticesComponent,
    OtherRequestsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyprofileRoutingModule
  ]
})
export class MyprofileModule { }
