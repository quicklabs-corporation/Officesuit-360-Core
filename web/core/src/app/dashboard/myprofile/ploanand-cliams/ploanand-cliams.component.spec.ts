import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PloanandCliamsComponent } from './ploanand-cliams.component';

describe('PloanandCliamsComponent', () => {
  let component: PloanandCliamsComponent;
  let fixture: ComponentFixture<PloanandCliamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PloanandCliamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PloanandCliamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
