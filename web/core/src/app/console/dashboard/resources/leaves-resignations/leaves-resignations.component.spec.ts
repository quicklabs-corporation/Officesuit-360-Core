import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesResignationsComponent } from './leaves-resignations.component';

describe('LeavesResignationsComponent', () => {
  let component: LeavesResignationsComponent;
  let fixture: ComponentFixture<LeavesResignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesResignationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesResignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
