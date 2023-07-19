import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Interface/Employee';

@Pipe({
  name: 'filterDepartment'
})
export class FilterDepartmentPipe implements PipeTransform {

  transform(value: Array<Employee>,departmentId:number|undefined): Array<Employee> {
    
    return departmentId === undefined || departmentId === 0 ? value : value.filter(emp=>emp.department.departmentID===departmentId);
  }

}
