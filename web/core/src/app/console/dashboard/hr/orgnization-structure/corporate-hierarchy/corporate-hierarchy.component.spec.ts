import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateHierarchyComponent } from './corporate-hierarchy.component';

describe('CorporateHierarchyComponent', () => {
  let component: CorporateHierarchyComponent;
  let fixture: ComponentFixture<CorporateHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateHierarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
