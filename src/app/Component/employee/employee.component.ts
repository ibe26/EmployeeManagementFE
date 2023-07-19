import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Interface/Employee';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class EmployeeComponent implements OnInit {
  @Input() employee!:Employee;
  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
    console.log(this.employee)
  }
  


}
