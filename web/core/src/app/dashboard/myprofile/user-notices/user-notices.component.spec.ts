import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNoticesComponent } from './user-notices.component';

describe('UserNoticesComponent', () => {
  let component: UserNoticesComponent;
  let fixture: ComponentFixture<UserNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
