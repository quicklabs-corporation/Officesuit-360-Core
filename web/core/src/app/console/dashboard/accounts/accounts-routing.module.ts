import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SalesPurchasesComponent } from './sales-purchases/sales-purchases.component';
import { VendorsComponent } from './vendors/vendors.component';
import { InvoicesAndEstimatesComponent } from './invoices-and-estimates/invoices-and-estimates.component';
import { AccountingComponent } from './accounting/accounting.component';
import { AssetsManagementComponent } from './assets-management/assets-management.component';
import { ExcemptionsComponent } from './excemptions/excemptions.component';
import { ConfigurationsComponent } from './configurations/configurations.component';

const routes: Routes = [{
  path: '',
  component: AccountsComponent,
  children: [{
    path: 'overview',
    component: AccountsOverviewComponent
  }, {
    path: 'payroll',
    component: PayrollComponent
  }, {
    path: 'sales-purchases',
    component: SalesPurchasesComponent
  }, {
    path: 'vendors',
    component: VendorsComponent
  }, {
    path: 'invoices-estimates',
    component: InvoicesAndEstimatesComponent
  }, {
    path: 'accounting',
    component: AccountingComponent
  }, {
    path: 'assets-management',
    component: AssetsManagementComponent
  }, {
    path: 'excemptions',
    component: ExcemptionsComponent
  }, {
    path: 'configurations',
    component: ConfigurationsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {

}
