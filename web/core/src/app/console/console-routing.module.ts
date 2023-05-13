import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { ConsoleComponent } from './console.component';

const routes: Routes = [{
  path: '',
  component: ConsoleComponent,
  children: [
    { path: '', redirectTo: 'apps', pathMatch: 'full' },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'connect',
      loadChildren: () => import('./connect/connect.module').then(m => m.ConnectModule)
    }, {
      path: 'myprofile',
      loadChildren: () => import('./myprofile/myprofile.module').then(m => m.MyprofileModule)
    }, {
      path: 'apps',
      component: AppsComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
