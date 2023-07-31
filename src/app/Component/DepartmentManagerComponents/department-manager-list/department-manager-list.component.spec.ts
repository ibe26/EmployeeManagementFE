import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentManagerListComponent } from './department-manager-list.component';

describe('DepartmentManagerListComponent', () => {
  let component: DepartmentManagerListComponent;
  let fixture: ComponentFixture<DepartmentManagerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentManagerListComponent]
    });
    fixture = TestBed.createComponent(DepartmentManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
