import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptManagerDropdownComponent } from './dept-manager-dropdown.component';

describe('DeptManagerDropdownComponent', () => {
  let component: DeptManagerDropdownComponent;
  let fixture: ComponentFixture<DeptManagerDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptManagerDropdownComponent]
    });
    fixture = TestBed.createComponent(DeptManagerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
