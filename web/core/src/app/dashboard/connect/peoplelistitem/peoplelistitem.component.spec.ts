import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplelistitemComponent } from './peoplelistitem.component';

describe('PeoplelistitemComponent', () => {
  let component: PeoplelistitemComponent;
  let fixture: ComponentFixture<PeoplelistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplelistitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplelistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
