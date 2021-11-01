import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewjoiniesComponent } from './newjoinies.component';

describe('NewjoiniesComponent', () => {
  let component: NewjoiniesComponent;
  let fixture: ComponentFixture<NewjoiniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewjoiniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewjoiniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
