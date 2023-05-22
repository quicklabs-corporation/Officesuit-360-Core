import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OnboardingRoutingModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class OnboardingModule { }
