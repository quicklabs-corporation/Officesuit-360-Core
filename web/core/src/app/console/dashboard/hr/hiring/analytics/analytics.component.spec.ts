import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringAnalyticsComponent } from './analytics.component';

describe('HiringAnalyticsComponent', () => {
  let component: HiringAnalyticsComponent;
  let fixture: ComponentFixture<HiringAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
