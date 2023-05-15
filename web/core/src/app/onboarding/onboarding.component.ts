import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { forkJoin } from 'rxjs';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'ql-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.less']
})
export class OnboardingComponent implements OnInit {
  currentStep: number = 0;
  modules: any;
  organizationDetailsForm!: FormGroup;
  baseData: any;
  constructor(private fb: FormBuilder, private readonly router: Router,
    private readonly authService: AuthService,
    private readonly dataService: DataService) {
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
    })
  }

  ngOnInit(): void {
    this.organizationDetailsForm = this.fb.group({
      country: [1, [Validators.required]],
      orgAddress: ['', [Validators.required]],
      teamSize: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      currency: ['$', [Validators.required]],
      industry: [1, [Validators.required]],
    });
    this.getBaseData();
    this.listenToFormEventChanges();
  }

  currentItem(stepNumber: number): void {
    this.currentStep = stepNumber;
  }

  goToConsole(): void {
    this.router.navigateByUrl('/console');
  }

  listenToFormEventChanges() {
    this.organizationDetailsForm.controls['country'].valueChanges.subscribe((value) => {
      const currency = this.baseData.
      this.organizationDetailsForm.controls['currency'].setValue()
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
