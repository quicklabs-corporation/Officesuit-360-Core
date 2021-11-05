import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcemptionsComponent } from './excemptions.component';

describe('ExcemptionsComponent', () => {
  let component: ExcemptionsComponent;
  let fixture: ComponentFixture<ExcemptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcemptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcemptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
