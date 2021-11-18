import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsAllocatedComponent } from './assets-allocated.component';

describe('AssetsAllocatedComponent', () => {
  let component: AssetsAllocatedComponent;
  let fixture: ComponentFixture<AssetsAllocatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsAllocatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsAllocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
