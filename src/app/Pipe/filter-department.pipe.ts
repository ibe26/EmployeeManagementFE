import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Interface/Employee';

@Pipe({
  name: 'filterDepartment'
})
export class FilterDepartmentPipe implements PipeTransform {

  transform(value: Array<Employee>|null,departmentId:number|undefined): Array<Employee>|null {
    
    return departmentId === undefined || departmentId === 0 ? value : value!.filter(emp=>emp.department?.departmentID===departmentId);
  }

}
