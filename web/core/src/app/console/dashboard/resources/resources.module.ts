import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesComponent } from './employees/employees.component';
import { ResourcesOverviewComponent } from './resources-overview/resources-overview.component';
import { ReviewsFeedbacksComponent } from './reviews-feedbacks/reviews-feedbacks.component';
import { OneOnOneComponent } from './one-on-one/one-on-one.component';
import { PromotionsAppraisalsComponent } from './promotions-appraisals/promotions-appraisals.component';
import { LeavesResignationsComponent } from './leaves-resignations/leaves-resignations.component';
import { ResourceConfigurationsComponent } from './resource-configurations/resource-configurations.component';


@NgModule({
  declarations: [
    ResourcesComponent,
    EmployeesComponent,
    ResourcesOverviewComponent,
    ReviewsFeedbacksComponent,
    OneOnOneComponent,
    PromotionsAppraisalsComponent,
    LeavesResignationsComponent,
    ResourceConfigurationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
