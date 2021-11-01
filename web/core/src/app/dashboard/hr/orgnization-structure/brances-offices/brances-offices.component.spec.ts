import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancesOfficesComponent } from './brances-offices.component';

describe('BrancesOfficesComponent', () => {
  let component: BrancesOfficesComponent;
  let fixture: ComponentFixture<BrancesOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancesOfficesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancesOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
