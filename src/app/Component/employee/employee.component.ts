import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Interface/Employee';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule,RouterModule],
})
export class EmployeeComponent implements OnInit {
  @Input() employee!:Employee;
  constructor(){}
  ngOnInit(): void {
  }
  


}
