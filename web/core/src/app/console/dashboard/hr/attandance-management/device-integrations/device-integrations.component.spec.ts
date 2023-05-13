import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIntegrationsComponent } from './device-integrations.component';

describe('DeviceIntegrationsComponent', () => {
  let component: DeviceIntegrationsComponent;
  let fixture: ComponentFixture<DeviceIntegrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceIntegrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
