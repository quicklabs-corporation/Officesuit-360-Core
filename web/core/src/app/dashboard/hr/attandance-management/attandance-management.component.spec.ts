import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandanceManagementComponent } from './attandance-management.component';

describe('AttandanceManagementComponent', () => {
  let component: AttandanceManagementComponent;
  let fixture: ComponentFixture<AttandanceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttandanceManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttandanceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
