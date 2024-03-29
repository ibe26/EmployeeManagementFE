import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';
import alertify from 'alertifyjs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterByDepartmentComponent } from '../../DepartmentComponents/department-dropdown/department-dropdown.component';
import { FilterService } from 'src/app/Service/Filter/filter-service.service';
import { DeptManagerDropdownComponent } from '../../DepartmentManagerComponents/dept-manager-dropdown/dept-manager-dropdown.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, FilterByDepartmentComponent,DeptManagerDropdownComponent]

})
export class AddEmployeeComponent {
  constructor(private formBuilder: FormBuilder
    , private router: Router
    , private employeeService: EmployeeService) { }

  public EmployeeForm: FormGroup=this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    departmentID: [undefined, [Validators.required,Validators.min(1)]],
    deptManagerID:[undefined,[Validators.required,Validators.min(1)]]
  });


  public onSubmit(): void {
    console.log(this.EmployeeForm.value)
    if (!this.EmployeeForm.valid) {
      alertify.error("Please provide all the informations needed.");
      return;
    }

    this.employeeService.post(this.EmployeeForm.value).subscribe(()=>{
      alertify.success("Employee successfully added.");
      this.router.navigate(['/employee-list']);
    });
  }
  public onDepartmentChange($event: number) {
    this.EmployeeForm.controls['departmentID'].setValue($event);
  }
  public onManagerChange($event: number) {
    this.EmployeeForm.controls['deptManagerID'].setValue($event);
    }
}
