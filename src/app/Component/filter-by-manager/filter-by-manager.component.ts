import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Department } from 'src/app/Interface/Department';
import { DepartmentService } from 'src/app/Service/Department/department.service';
import { FilterService } from 'src/app/Service/Filter/filter-service.service';

@Component({
  selector: 'app-filter-by-manager',
  templateUrl: './filter-by-manager.component.html',
  styleUrls: ['./filter-by-manager.component.css'],
  standalone:true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgIf, NgFor],
})
export class FilterByManagerComponent implements OnInit {

  constructor(private departmentService:DepartmentService,public filterService:FilterService){}
  
  public departments:Array<Department>=[];

  ngOnInit(): void {
    this.departmentService.get().subscribe((data:Array<Department>)=>{
      this.departments=data;
    })
  }
  
  public onValueChange(event:any){
    console.log(event.value)
    this.filterService.filterDepartmentID=event.value;
  }

 
}