import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AttandanceManagementComponent } from './attandance-management/attandance-management.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OrgnizationStructureComponent } from './orgnization-structure/orgnization-structure.component';
import { ConfigurationsManagenentComponent } from './configurations/configurations.component';
import { LegalDocumentsComponent } from './legal-documents/legal-documents.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RolesComponent } from './configurations/roles/roles.component';
import { BenfitsComponent } from './configurations/benfits/benfits.component';
import { ExperienceComponent } from './configurations/experience/experience.component';
import { DepartmentsComponent } from './configurations/departments/departments.component';
import { JobsComponent } from './hiring/jobs/jobs.component';
import { JobViewComponent } from './hiring/job-view/job-view.component';
import { CreateJobComponent } from './hiring/create-job/create-job.component';
import { InterviewTemplatesComponent } from './hiring/interview-templates/interview-templates.component';
import { ScheduledComponent } from './hiring/scheduled/scheduled.component';
import { RequestsComponent } from './hiring/requests/requests.component';
import { HiringAnalyticsComponent } from './hiring/analytics/analytics.component';
import { HiringComponent } from './hiring/hiring.component';
import { AttendenceOverviewComponent } from './attandance-management/attendence-overview/attendence-overview.component';
import { LeavePoliciesComponent } from './attandance-management/leave-policies/leave-policies.component';
import { ShiftsManagementComponent } from './attandance-management/shifts-management/shifts-management.component';
import { DeviceIntegrationsComponent } from './attandance-management/device-integrations/device-integrations.component';
import { DocumentTemplatesComponent } from './legal-documents/document-templates/document-templates.component';
import { RequestSentComponent } from './legal-documents/request-sent/request-sent.component';
import { ForapprovalComponent } from './legal-documents/forapproval/forapproval.component';
import { NewjoiniesComponent } from './onboarding/newjoinies/newjoinies.component';
import { RelivingsComponent } from './onboarding/relivings/relivings.component';
import { RulesComponent } from './onboarding/rules/rules.component';
import { CorporateHierarchyComponent } from './orgnization-structure/corporate-hierarchy/corporate-hierarchy.component';
import { BrancesOfficesComponent } from './orgnization-structure/brances-offices/brances-offices.component';

@NgModule({
  declarations: [
    HrComponent,
    AttandanceManagementComponent,
    OnboardingComponent,
    OrgnizationStructureComponent,
    ConfigurationsManagenentComponent,
    LegalDocumentsComponent,
    AnalyticsComponent,
    RolesComponent,
    BenfitsComponent,
    ExperienceComponent,
    DepartmentsComponent,
    JobsComponent,
    JobViewComponent,
    CreateJobComponent,
    InterviewTemplatesComponent,
    ScheduledComponent,
    HiringAnalyticsComponent,
    RequestsComponent,
    HiringComponent,
    AttendenceOverviewComponent,
    LeavePoliciesComponent,
    ShiftsManagementComponent,
    DeviceIntegrationsComponent,
    DocumentTemplatesComponent,
    RequestSentComponent,
    ForapprovalComponent,
    NewjoiniesComponent,
    RelivingsComponent,
    RulesComponent,
    CorporateHierarchyComponent,
    BrancesOfficesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HrRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class HrModule { }
