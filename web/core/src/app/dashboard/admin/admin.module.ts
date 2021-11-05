import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { InsurancesPoliciesComponent } from './insurances-policies/insurances-policies.component';
import { AssetsTrackingComponent } from './assets-tracking/assets-tracking.component';
import { SubscriptionsPaymentsComponent } from './subscriptions-payments/subscriptions-payments.component';
import { RequestsComponent } from './requests/requests.component';
import { AdminConfigurationsComponent } from './admin-configurations/admin-configurations.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminOverviewComponent,
    InsurancesPoliciesComponent,
    AssetsTrackingComponent,
    SubscriptionsPaymentsComponent,
    RequestsComponent,
    AdminConfigurationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
