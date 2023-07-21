import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor, CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Department } from 'src/app/Interface/Department';
import { DepartmentService } from 'src/app/Service/Department/department.service';
import { FilterService } from 'src/app/Service/Filter/filter-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menager-dropdown',
  templateUrl: './manager-dropdown.component.html',
  styleUrls: ['./manager-dropdown.component.css'],
  standalone:true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgIf, NgFor,CommonModule],
})
export class FilterByManagerComponent implements OnInit {
  @Input() defaultValue!:number|undefined;
  @Output() DepartmentChange = new EventEmitter<number>();

  constructor(private departmentService:DepartmentService,public filterService:FilterService){}
  
  public departments$:Observable<Array<Department>>=this.departmentService.get();

  ngOnInit(): void {

  }
  
  public onDepartmentChange(event:any){
    this.DepartmentChange.emit(event.value)
  }


 
}