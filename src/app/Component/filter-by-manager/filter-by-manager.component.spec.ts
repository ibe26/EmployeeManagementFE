import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByManagerComponent } from './filter-by-manager.component';

describe('FilterByManagerComponent', () => {
  let component: FilterByManagerComponent;
  let fixture: ComponentFixture<FilterByManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterByManagerComponent]
    });
    fixture = TestBed.createComponent(FilterByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
