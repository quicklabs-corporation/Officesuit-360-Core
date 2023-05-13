import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsFeedbacksComponent } from './reviews-feedbacks.component';

describe('ReviewsFeedbacksComponent', () => {
  let component: ReviewsFeedbacksComponent;
  let fixture: ComponentFixture<ReviewsFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsFeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
