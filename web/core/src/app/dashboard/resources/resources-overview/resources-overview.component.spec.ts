import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesOverviewComponent } from './resources-overview.component';

describe('ResourcesOverviewComponent', () => {
  let component: ResourcesOverviewComponent;
  let fixture: ComponentFixture<ResourcesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
