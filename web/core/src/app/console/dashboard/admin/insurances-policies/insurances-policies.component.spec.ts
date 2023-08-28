import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancesPoliciesComponent } from './insurances-policies.component';

describe('InsurancesPoliciesComponent', () => {
  let component: InsurancesPoliciesComponent;
  let fixture: ComponentFixture<InsurancesPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancesPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancesPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
