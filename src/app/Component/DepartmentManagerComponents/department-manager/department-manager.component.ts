import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { DeptManager } from 'src/app/Interface/DepartmentManager';
import { DeptManagerService } from 'src/app/Service/DeptManager/dept-manager.service';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-department-manager',
  templateUrl: './department-manager.component.html',
  styleUrls: ['./department-manager.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
})
export class DepartmentManagerComponent {
  @Input() manager!: DeptManager;
  constructor(private deptManagerService: DeptManagerService
    , private router: Router) { }

  public onDeleteClick() {
    alertify.confirm(`Are you sure you want to remove ${this.manager.firstName + ' ' + this.manager.lastName}`, () => {
      this.deptManagerService.delete(this.manager.deptManagerID).subscribe(httpStatus => {
        if (httpStatus.ok) {
          alertify.success(`Successfully Removed ${this.manager.firstName + ' ' + this.manager.lastName}`)
          location.reload()
        }
      })
    })
  }

}
