import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ql-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.less']
})
export class OnboardingComponent implements OnInit {
  currentStep: number = 1;
  modules: any;
  organizationDetailsForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.modules = {
      selfServicePortal: true,
      connect: true,
      hr: false,
      accounting: false,
      marketing: false,
      crm: false,
      sales: false,
      admin: false,
      pm: false
    }  
  }

  ngOnInit(): void {
    this.organizationDetailsForm = this.fb.group({
      country: ['+87', [Validators.required]],
      orgAddress: ['', [Validators.required]],
      teamSize: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      currency: ['INR', [Validators.required]],
      industry: ['+86', [Validators.required]],
    });
  }

  currentItem(stepNumber: number): void {
    this.currentStep = stepNumber;
  }
}
