import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsAppraisalsComponent } from './promotions-appraisals.component';

describe('PromotionsAppraisalsComponent', () => {
  let component: PromotionsAppraisalsComponent;
  let fixture: ComponentFixture<PromotionsAppraisalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsAppraisalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsAppraisalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
