import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelivingsComponent } from './relivings.component';

describe('RelivingsComponent', () => {
  let component: RelivingsComponent;
  let fixture: ComponentFixture<RelivingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelivingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelivingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
