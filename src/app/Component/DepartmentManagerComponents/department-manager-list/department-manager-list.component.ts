import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DeptManager } from 'src/app/Interface/DepartmentManager';
import { DeptManagerService } from 'src/app/Service/DeptManager/dept-manager.service';

@Component({
  selector: 'app-department-manager-list',
  templateUrl: './department-manager-list.component.html',
  styleUrls: ['./department-manager-list.component.css']
})
export class DepartmentManagerListComponent {
  constructor(private deptManagerService:DeptManagerService){}

    public managers$:Observable<Array<DeptManager>>=this.deptManagerService.get();

}
