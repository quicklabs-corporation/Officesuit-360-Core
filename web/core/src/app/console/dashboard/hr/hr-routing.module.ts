import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr.component';
import { OrgnizationStructureComponent } from './orgnization-structure/orgnization-structure.component';
import { AttandanceManagementComponent } from './attandance-management/attandance-management.component';
import { LegalDocumentsComponent } from './legal-documents/legal-documents.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ConfigurationsManagenentComponent } from './configurations/configurations.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HiringComponent } from './hiring/hiring.component';

const routes: Routes = [{
  path: '',
  component: HrComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'analytics'
    },
    {
      path: 'hiring',
      component: HiringComponent
    }, {
      path: 'organization',
      component: OrgnizationStructureComponent
    }, {
      path: 'analytics',
      component: AnalyticsComponent
    }, {
      path: 'attandance',
      component: AttandanceManagementComponent
    }, {
      path: 'legaldocuments',
      component: LegalDocumentsComponent
    }, {
      path: 'onboarding',
      component: OnboardingComponent
    }, {
      path: 'attandance',
      component: OnboardingComponent
    }, {
      path: 'configurations',
      component: ConfigurationsManagenentComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
