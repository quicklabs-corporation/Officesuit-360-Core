import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appConstants } from 'src/app/core/constants/app.constants';
import { ILogin } from 'src/app/core/models/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ql-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  userData: any;
  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private readonly router: Router, private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    const user = localStorage.getItem(appConstants.USER_DATA);
    if (!!user) {
      this.userData = JSON.parse(user);
    }

    if (this.userData && this.userData.authToken) {
      if (this.userData.appConfigured) {
        this.redirect(this.userData, 'console');
      } else {
        this.redirect(this.userData, 'onboarding');
      }
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authService.login(this.validateForm.getRawValue() as ILogin).subscribe(res => {
        if (!res.isError) {
          if (res.data && res.data.appConfigured) {
            this.redirect(res.data, 'console');
          } else {
            this.redirect(res.data, 'onboarding');
          }
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  redirect(data: any, path: string) {
    this.router.navigate([`/${path}`]).then((navigatedToOnboarding: boolean) => {
      if (navigatedToOnboarding && data) {
        this.setDataToStorage(data)
      }
    })
  }

  setDataToStorage(data: any) {
    localStorage.setItem(appConstants.AUTH_TOKEN_KEY, data.authToken);
    localStorage.setItem(appConstants.USER_DATA, JSON.stringify(data));
    localStorage.setItem(appConstants.APP_CONFIGURED_KEY, data.appConfigured);
  }

}
