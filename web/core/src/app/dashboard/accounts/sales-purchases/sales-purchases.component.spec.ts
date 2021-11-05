import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPurchasesComponent } from './sales-purchases.component';

describe('SalesPurchasesComponent', () => {
  let component: SalesPurchasesComponent;
  let fixture: ComponentFixture<SalesPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
