import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LeavesResignationsComponent } from './leaves-resignations/leaves-resignations.component';
import { OneOnOneComponent } from './one-on-one/one-on-one.component';
import { PromotionsAppraisalsComponent } from './promotions-appraisals/promotions-appraisals.component';
import { ResourceConfigurationsComponent } from './resource-configurations/resource-configurations.component';
import { ResourcesOverviewComponent } from './resources-overview/resources-overview.component';
import { ResourcesComponent } from './resources.component';
import { ReviewsFeedbacksComponent } from './reviews-feedbacks/reviews-feedbacks.component';

const routes: Routes = [{
  path: '',
  component: ResourcesComponent,
  children: [{
    path: 'overview',
    component: ResourcesOverviewComponent,
  }, {
    path: 'reviews-feedbacks',
    component: ReviewsFeedbacksComponent,
  }, {
    path: 'configurations',
    component: ResourceConfigurationsComponent,
  }, {
    path: 'one-on-one-meetings',
    component: OneOnOneComponent,
  }, {
    path: 'leaves',
    component: LeavesResignationsComponent,
  }, {
    path: 'promotions-apprisals',
    component: PromotionsAppraisalsComponent,
  }, {
    path: 'employees',
    component: EmployeesComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
