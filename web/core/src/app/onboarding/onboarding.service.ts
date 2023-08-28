import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(private readonly httpClient: HttpClient) { }

  postOnboardingDetails(formData: any) {
    return this.httpClient.post(`/api/onboarding/organization-details`, formData)
  }

}
