import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRequestsComponent } from './other-requests.component';

describe('OtherRequestsComponent', () => {
  let component: OtherRequestsComponent;
  let fixture: ComponentFixture<OtherRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
