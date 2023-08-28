import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { forkJoin } from 'rxjs';
import { DataService } from '../shared/services/data.service';
import { appConstants } from '../core/constants/app.constants';
import { OnboardingService } from './onboarding.service';

@Component({
  selector: 'ql-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.less']
})
export class OnboardingComponent implements OnInit {
  currentStep: number = 0;
  organizationDetailsForm!: FormGroup;
  baseData: any;
  constructor(private fb: FormBuilder, private readonly router: Router,
    private readonly authService: AuthService,
    private readonly dataService: DataService,
    private readonly onboardingService: OnboardingService) {
  }

  getBaseData() {
    forkJoin(
      {
        countries: this.dataService.getCountries(),
        states: this.dataService.getStates(this.organizationDetailsForm.value.country),
        industries: this.dataService.getIndustries(),
        modules: this.dataService.getModules()
      }
    ).subscribe((res: any) => {
      this.baseData = res;
      localStorage.setItem(appConstants.BASE_DATA, JSON.stringify(res));
    })
  }

  ngOnInit(): void {
    this.organizationDetailsForm = this.fb.group({
      country: [1, [Validators.required]],
      orgAddress: ['', [Validators.required]],
      teamSize: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      currency: [1, [Validators.required]],
      industry: [1, [Validators.required]],
    });
    const baseData = localStorage.getItem(appConstants.BASE_DATA)
    if (!!baseData) {
      this.baseData = JSON.parse(baseData);
    } else {
      this.getBaseData();
    }
    this.listenToFormEventChanges();
  }

  currentItem(stepNumber: number): void {
    this.currentStep = stepNumber;
  }

  submitOrganizationForm(): void {
    if (this.organizationDetailsForm.valid) {
      this.currentItem(1);
      this.onboardingService.postOnboardingDetails(this.organizationDetailsForm.value).subscribe(
        (response) => console.log(response)
      )
    } else {
      Object.values(this.organizationDetailsForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  subscribeToModules() {
    console.log(this.baseData.modules);
    this.currentItem(2);
  }

  goToConsole(): void {
    this.router.navigateByUrl('/console');
  }

  listenToFormEventChanges() {
    this.organizationDetailsForm.controls['country'].valueChanges.subscribe((value) => {
      // const currency = this.baseData.
      this.organizationDetailsForm.controls['currency'].setValue(value)
    })
  }

  signOut() {
    this.authService.signout().then((res: boolean) => {
      if (res) {
        this.router.navigate(['/auth/login']);
      }
    })
  }
}
