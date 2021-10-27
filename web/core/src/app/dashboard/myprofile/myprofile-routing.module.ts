import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile.component';
import { CtcComponent } from './ctc/ctc.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { PloanandCliamsComponent } from './ploanand-cliams/ploanand-cliams.component';
import { SummaryComponent } from './summary/summary.component';
import { UserNoticesComponent } from './user-notices/user-notices.component';
import { LeavePoliciesComponent } from './leave-policies/leave-policies.component';
import { AssetsAllocatedComponent } from './assets-allocated/assets-allocated.component';
import { OtherRequestsComponent } from './other-requests/other-requests.component';
import { OverviewComponent } from './overview/overview.component';
import { AccountsComponent } from './accounts/accounts.component';
const routes: Routes = [{
  path: '',
  component: MyprofileComponent,
  children: [{
    path: 'ctc',
    component: CtcComponent
  }, {
    path: 'feedback',
    component: FeedbacksComponent
  }, {
    path: 'loans-claims',
    component: PloanandCliamsComponent
  }, {
    path: 'summary',
    component: SummaryComponent
  }, {
    path: 'user-notices',
    component: UserNoticesComponent
  }, {
    path: 'leaves',
    component: LeavePoliciesComponent
  }, {
    path: 'assets-allocated',
    component: AssetsAllocatedComponent
  }, {
    path: 'other',
    component: OtherRequestsComponent
  }, {
    path: 'accounts',
    component: AccountsComponent
  }, {
    path: 'overview',
    component: OverviewComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyprofileRoutingModule { }
