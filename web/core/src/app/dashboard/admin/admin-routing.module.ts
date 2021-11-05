import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminConfigurationsComponent } from './admin-configurations/admin-configurations.component';
import { SubscriptionsPaymentsComponent } from './subscriptions-payments/subscriptions-payments.component';
import { RequestsComponent } from './requests/requests.component';
import { InsurancesPoliciesComponent } from './insurances-policies/insurances-policies.component';
import { AssetsTrackingComponent } from './assets-tracking/assets-tracking.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'configurations',
    component: AdminConfigurationsComponent,
  }, {
    path: 'subscriptions',
    component: SubscriptionsPaymentsComponent,
  }, {
    path: 'requests',
    component: RequestsComponent,
  }, {
    path: 'insurance-policies',
    component: InsurancesPoliciesComponent,
  }, {
    path: 'assets-tracking',
    component: AssetsTrackingComponent,
  }, {
    path: 'overview',
    component: AdminOverviewComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
