import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountingComponent } from './accounting/accounting.component';
import { PayrollComponent } from './payroll/payroll.component';
import { InvoicesAndEstimatesComponent } from './invoices-and-estimates/invoices-and-estimates.component';
import { SalesPurchasesComponent } from './sales-purchases/sales-purchases.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { AssetsManagementComponent } from './assets-management/assets-management.component';
import { ExcemptionsComponent } from './excemptions/excemptions.component';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';


@NgModule({
  declarations: [
    AccountsComponent,
    AccountingComponent,
    PayrollComponent,
    InvoicesAndEstimatesComponent,
    SalesPurchasesComponent,
    VendorsComponent,
    ConfigurationsComponent,
    AssetsManagementComponent,
    ExcemptionsComponent,
    AccountsOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
