import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  public filterText:string="";
  public filterDepartmentID:number=0;
  public filterManagerID:number=0;
}
