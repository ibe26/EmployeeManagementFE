import { Pipe, PipeTransform } from '@angular/core';
import { DeptManager } from '../Interface/DepartmentManager';

@Pipe({
  name: 'filterManagers',
  standalone:true
})
export class FilterManagersPipe implements PipeTransform {

  transform(value: Array<DeptManager>|null,departmentId:number|undefined): Array<DeptManager>|null {
    
    return value!?.filter(manager=>manager.department.departmentID===departmentId)
  }


}
