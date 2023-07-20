import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Interface/Employee';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';
import alertify from 'alertifyjs'
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Observable, map } from 'rxjs';
import { FilterByManagerComponent } from '../filter-by-manager/filter-by-manager.component';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, FilterByManagerComponent]
})
export class EmployeeEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder
    , private employeeService: EmployeeService
    , private activatedRoute: ActivatedRoute
    ,private router:Router) { }

  public editEmployeeForm!: FormGroup;
  public readonly employeeID: number = this.activatedRoute.snapshot.params['id'];
  public employee$: Observable<Employee> = this.employeeService.findById(this.employeeID);


  ngOnInit(): void {
    this.employee$.subscribe((employee:Employee)=>{
      this.editEmployeeForm = this.formBuilder.group({
        firstName: [employee.firstName, [Validators.required]],
        lastName: [employee.lastName, [Validators.required]],
        email: [employee.email, [Validators.required, Validators.email]],
        departmentID: [employee.department.departmentID,Validators.required]
      });
    })
  }

  public onSubmit(): void {
    console.log(this.editEmployeeForm.value)
    if (!this.editEmployeeForm.valid) {
      alertify.error("Please provide all the informations needed.");
      return;
    }

    this.employeeService.put(this.editEmployeeForm.value, this.employeeID).subscribe();
    this.router.navigate(['/'])
    
  }
  public onDepartmentChange($event:number){
    console.log($event)
    this.editEmployeeForm.controls['departmentID'].setValue($event);
  }
  
}
