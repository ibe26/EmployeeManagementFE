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
  selector: 'app-filter-by-manager',
  templateUrl: './filter-by-manager.component.html',
  styleUrls: ['./filter-by-manager.component.css'],
  standalone:true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgIf, NgFor,CommonModule],
})
export class FilterByManagerComponent implements OnInit {
  @Input() defaultValue!:number|undefined;
  @Output() DepartmentValue = new EventEmitter<number>();

  constructor(private departmentService:DepartmentService,public filterService:FilterService){}
  
  public departments$:Observable<Array<Department>>=this.departmentService.get();

  ngOnInit(): void {

  }
  
  public onDepartmentChange(event:any){
    this.DepartmentValue.emit(event.value)
  }


 
}