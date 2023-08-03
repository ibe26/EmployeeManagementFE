import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilterByDepartmentComponent } from '../../DepartmentComponents/department-dropdown/department-dropdown.component';
import { DeptManagerDropdownComponent } from '../dept-manager-dropdown/dept-manager-dropdown.component';
import { DeptManagerService } from 'src/app/Service/DeptManager/dept-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeptManager } from 'src/app/Interface/DepartmentManager';
import { Observable } from 'rxjs';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, FilterByDepartmentComponent, DeptManagerDropdownComponent]

})
export class ManagerEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder
    , private deptManagerService: DeptManagerService
    , private activatedRoute: ActivatedRoute
    , private router: Router) { }

  public readonly employeeID: number = this.activatedRoute.snapshot.params['id'];
  public manager$: Observable<DeptManager> = this.deptManagerService.findById(this.employeeID);
  public ManagerForm!: FormGroup;


  ngOnInit(): void {
    this.manager$.subscribe((manager: DeptManager) => {
      this.ManagerForm = this.formBuilder.group({
        firstName: [manager.firstName, [Validators.required]],
        lastName: [manager.lastName, [Validators.required]],
        email: [manager.email, [Validators.required, Validators.email]],
        departmentID: [manager.department?.departmentID, [Validators.required, Validators.min(1)]],
      });
    })
  }
  public onSubmit() {
    if (!this.ManagerForm.valid) {
      alertify.error("Please provide all the informations needed.");
      return;
    }

    this.deptManagerService.put(this.ManagerForm.value, this.employeeID).subscribe((httpResponse) => {
      if (httpResponse.status === 200) {
        this.router.navigate(['/department-manager-list'])
        return;
      }
      alertify.error(httpResponse.status)
    });

  }
  public onDepartmentChange($event: number) {
    this.ManagerForm.controls['departmentID'].setValue($event);
  }
}
