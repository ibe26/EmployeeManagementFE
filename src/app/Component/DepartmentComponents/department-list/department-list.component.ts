import { Component, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Department, DepartmentDTO } from 'src/app/Interface/Department';
import { DepartmentService } from 'src/app/Service/Department/department.service';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import alertify from 'alertifyjs';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule]

})
export class DepartmentListComponent {
  @ViewChild(MatTable) table!: MatTable<any>;
  constructor(private departmentService: DepartmentService) { }
  // public departments$: Observable<Array<Department>> = this.departmentService.get();
  dataSource = new MatTableDataSource<Department>();

  ngOnInit() {
    this.departmentService.get().subscribe(department => {
      this.dataSource.data = department;
    });
  }

  public displayedColumns: string[] = ['department-no', 'department-name', 'buttons'];

  public onDeleteClick(departmentID: number) {

    this.departmentService.findById(departmentID).subscribe(department => {
      alertify.confirm(`Are you sure you want to remove ${department.departmentName}`, () => {
        this.departmentService.delete(departmentID).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(department => department.departmentID != departmentID);
          this.table.renderRows();
          alertify.success(`Successfully deleted ${department.departmentName}`);
        })
      }
      ).set({title:"Confirm action"});
    })

  }

  public onAddClick() {
    alertify.prompt('Insert Department', 'Enter Department Name',''
      , (evt:any,departmentName: string) => {
        if(departmentName.length===0){
          alertify.error("Please provide a department name");
          return;
        }
        const departmentDto: DepartmentDTO = {
          departmentName: departmentName
        };
        this.departmentService.post(departmentDto).subscribe((department) => {
          this.dataSource.data = [...this.dataSource.data, department];
          this.table.renderRows();
          alertify.success(`${departmentName} has been successfully added!`)
        })

      }
      , () => {});

  }

}
