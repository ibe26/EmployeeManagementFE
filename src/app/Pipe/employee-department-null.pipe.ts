import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeDepartmentNull'
})
export class EmployeeDepartmentNullPipe implements PipeTransform {

  transform(value: string|null): string|undefined {
    if(value!==null){
      return value;
    }
    else return "Department Manager hasn't been assigned yet.";
  }

}
