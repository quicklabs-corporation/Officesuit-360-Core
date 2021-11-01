import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ql-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  passwordVisible: boolean = false;
  success: boolean = false;
  registerFromValues: any;
  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      organizationName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      domain: ['', [Validators.required],
        // [this.domainAsyncValidator]
      ],
      termsAndConditions: [false, [Validators.required, Validators.requiredTrue]],
      subscribeToNewsLetter: [false],
      password: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  domainAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      const regex = new RegExp('/^[a-zA-Z0-9-]{6,}$/g');
      if (!control.value) {
        observer.next(null);
      } else {
        if (regex.test(control.value)) {
          observer.next({ error: true, hasHelpText: true });
        } else {
          if (control.value !== 'surya') {
            observer.next({ error: true, exists: true });
          } else {
            observer.next({});
          }
        }
      }
      observer.complete();
    });

  submitForm(): void {
    this.success = true;
    this.registerFromValues = this.registerForm.getRawValue();
  }

  goToHome(): void {
    this.resetForm(this.registerForm);
    this.router.navigate(['/']);
  }

  resetForm(form: FormGroup): void {
    form.reset();
    for (const key in form.controls) {
      if (form.controls.hasOwnProperty(key)) {
        form.controls[key].markAsPristine();
        form.controls[key].updateValueAndValidity();
      }
    }
  }
}
