import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DeptManagerService } from 'src/app/Service/DeptManager/dept-manager.service';
import { FilterService } from 'src/app/Service/Filter/filter-service.service';
import { Observable } from 'rxjs';
import { DeptManager } from 'src/app/Interface/DepartmentManager';
import { FilterManagersPipe } from 'src/app/Pipe/filter-managers.pipe';

@Component({
  selector: 'app-dept-manager-dropdown',
  templateUrl: './dept-manager-dropdown.component.html',
  styleUrls: ['./dept-manager-dropdown.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgIf, NgFor, CommonModule,FilterManagersPipe],
})
export class DeptManagerDropdownComponent {
  @Input() defaultValue!: number | undefined;
  @Input() departmentID!:number|undefined;
  @Output() ManagerChange = new EventEmitter<number>();

  constructor(private deptManagerService: DeptManagerService
    , public filterService: FilterService) { }

  public managers$: Observable<Array<DeptManager>> = this.deptManagerService.get();

  public onManagerChange(event: any) {
    this.ManagerChange.emit(event.value)
  }

}
