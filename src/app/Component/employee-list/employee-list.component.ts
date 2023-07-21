import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Interface/Employee';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';
import { FilterService } from 'src/app/Service/Filter/filter-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  constructor(private employeeService:EmployeeService, public filterService:FilterService){}

  public employees$:Observable<Array<Employee>>=this.employeeService.get();

  public onDepartmentChange($event:number){
    this.filterService.filterDepartmentID=$event;
  }
}
