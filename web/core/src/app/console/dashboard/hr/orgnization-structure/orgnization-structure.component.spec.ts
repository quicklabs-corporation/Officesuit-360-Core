import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnizationStructureComponent } from './orgnization-structure.component';

describe('OrgnizationStructureComponent', () => {
  let component: OrgnizationStructureComponent;
  let fixture: ComponentFixture<OrgnizationStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgnizationStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgnizationStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
