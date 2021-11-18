import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'hr',
    loadChildren: () => import('./hr/hr.module').then(m => m.HrModule)
  }, {
    path: 'resources',
    loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
  }, {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
  },{
    path: 'entities',
    loadChildren: () => import('./entities/entities.module').then(m => m.EntitiesModule)
  }, {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }, {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  }, {
    path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
