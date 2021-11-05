import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceConfigurationsComponent } from './resource-configurations.component';

describe('ResourceConfigurationsComponent', () => {
  let component: ResourceConfigurationsComponent;
  let fixture: ComponentFixture<ResourceConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceConfigurationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
