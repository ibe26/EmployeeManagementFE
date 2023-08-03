import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { DeptManagerService } from 'src/app/Service/DeptManager/dept-manager.service';
import { FilterByDepartmentComponent } from '../../DepartmentComponents/department-dropdown/department-dropdown.component';
import { DeptManagerDropdownComponent } from '../dept-manager-dropdown/dept-manager-dropdown.component';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-manager-add',
  templateUrl: './manager-add.component.html',
  styleUrls: ['./manager-add.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, FilterByDepartmentComponent,DeptManagerDropdownComponent]

})
export class ManagerAddComponent {
  constructor(private formBuilder: FormBuilder
    , private router: Router
    , private deptManagerService: DeptManagerService) { }

  public ManagerForm: FormGroup=this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    departmentID: [undefined, [Validators.required,Validators.min(1)]]
  });

  public onDepartmentChange($event: number) {
    this.ManagerForm.controls['departmentID'].setValue($event);
  }

  public onSubmit(): void {
    console.log(this.ManagerForm.value)
    if (!this.ManagerForm.valid) {
      alertify.error("Please provide all the informations needed.");
      return;
    }

    this.deptManagerService.post(this.ManagerForm.value).subscribe(()=>{
      alertify.success("Employee Successfully added.");
      this.router.navigate(['/employee-list']);
    });
  }

}
