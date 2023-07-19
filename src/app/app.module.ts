import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


import { EmployeeComponent } from './Component/employee/employee.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { EmployeeEditComponent } from './Component/employee-edit/employee-edit.component';
import { SearchbarComponent } from "./Component/searchbar/searchbar.component";

import { SearchBarFilterPipe } from './Pipe/search-bar-filter.pipe';
import { FilterDepartmentPipe } from './Pipe/filter-department.pipe';
import { FilterByManagerComponent } from './Component/filter-by-manager/filter-by-manager.component';
import { Routes,RouterModule } from '@angular/router';

const routes:Routes=[
{path:'',component:EmployeeListComponent},
{path:'edit-employee/:id',component:EmployeeEditComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        NavbarComponent,
        EmployeeEditComponent,
        SearchBarFilterPipe,
        FilterDepartmentPipe,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        EmployeeComponent,
        SearchbarComponent,
        FilterByManagerComponent,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppModule { }
