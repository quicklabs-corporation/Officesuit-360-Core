import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesAndEstimatesComponent } from './invoices-and-estimates.component';

describe('InvoicesAndEstimatesComponent', () => {
  let component: InvoicesAndEstimatesComponent;
  let fixture: ComponentFixture<InvoicesAndEstimatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesAndEstimatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesAndEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
