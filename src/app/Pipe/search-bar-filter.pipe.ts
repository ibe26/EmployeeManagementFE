import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Interface/Employee';

@Pipe({
  name: 'searchBarFilter'
})
export class SearchBarFilterPipe implements PipeTransform {

  transform(value: Array<Employee>,filterText:string): Array<Employee> {
    return value.filter(emp=>emp.firstName.toLowerCase().includes(filterText.toLowerCase()) || emp.lastName.toLowerCase().includes(filterText));
  }

}
