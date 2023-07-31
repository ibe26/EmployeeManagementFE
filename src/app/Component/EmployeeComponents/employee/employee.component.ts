import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Interface/Employee';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
})
export class EmployeeComponent{
  @Input() employee!: Employee;
  constructor(private employeeService: EmployeeService
    , private router: Router) { }


  public onDeleteClick() {
    alertify.confirm(`Are you sure you want to remove ${this.employee.firstName + ' ' + this.employee.lastName}`, () => {
      this.employeeService.delete(this.employee.empID).subscribe(httpStatus => {
        if (httpStatus.ok) {
          alertify.success(`Successfully Removed ${this.employee.firstName + ' ' + this.employee.lastName}`)
          location.reload()
        }
      })
    })
  }
}
