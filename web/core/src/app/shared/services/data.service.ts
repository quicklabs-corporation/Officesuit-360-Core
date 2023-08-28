import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly httpClient: HttpClient) { }

  getCountries() {
    return this.httpClient.get(`/api/common/countries`).pipe(map((res: any) => res.isError ? [] : res.data.items))
  }

  getStates(countryCode: number) {
    return this.httpClient.get(`/api/common/states?countryCode=${countryCode}`).pipe(map((res: any) => res.isError ? [] : res.data.items))
  }

  getIndustries() {
    return this.httpClient.get(`/api/common/industries`).pipe(map((res: any) => res.isError ? [] : res.data.items))
  }

  getModules() {
    return this.httpClient.get(`/api/common/modules`).pipe(map((res: any) => res.isError ? [] : res.data.items))
  }

}
