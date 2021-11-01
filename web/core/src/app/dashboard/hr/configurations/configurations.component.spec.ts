import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsManagenentComponent } from './configurations.component';

describe('ConfigurationsManagenentComponent', () => {
  let component: ConfigurationsManagenentComponent;
  let fixture: ComponentFixture<ConfigurationsManagenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationsManagenentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationsManagenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
