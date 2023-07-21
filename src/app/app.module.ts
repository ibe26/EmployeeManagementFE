import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeComponent } from './Component/employee/employee.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { EmployeeEditComponent } from './Component/employee-edit/employee-edit.component';
import { SearchbarComponent } from "./Component/searchbar/searchbar.component";
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';

import { SearchBarFilterPipe } from './Pipe/search-bar-filter.pipe';
import { FilterDepartmentPipe } from './Pipe/filter-department.pipe';
import { Routes,RouterModule } from '@angular/router';
import { FilterByManagerComponent } from "./Component/manager-dropdown/manager-dropdown.component";

const routes:Routes=[
{path:'',component:EmployeeListComponent},
{path:'employee-edit/:id',component:EmployeeEditComponent},
{path:'employee-add',component:AddEmployeeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        NavbarComponent,
        SearchBarFilterPipe,
        FilterDepartmentPipe,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [RouterModule],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        EmployeeComponent,
        SearchbarComponent,
        RouterModule.forRoot(routes),
        FilterByManagerComponent
    ]
})
export class AppModule { }
