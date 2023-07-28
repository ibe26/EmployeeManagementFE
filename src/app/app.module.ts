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
import { FilterByDepartmentComponent } from "./Component/department-dropdown/department-dropdown.component";
import { DeptManagerDropdownComponent } from './Component/dept-manager-dropdown/dept-manager-dropdown.component';
import { FilterManagersPipe } from './Pipe/filter-managers.pipe';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { AuthGuardTokenService } from './Service/AuthGuard/auth-guard-token.service';
import { ErrorPageComponent } from './Component/error-page/error-page.component';

const routes:Routes=[
{path:'employee-list',component:EmployeeListComponent,canActivate:[AuthGuardTokenService]},
{path:'employee-edit/:id',component:EmployeeEditComponent},
{path:'employee-add',component:AddEmployeeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'**',component:ErrorPageComponent},

];

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        SearchBarFilterPipe,
        FilterDepartmentPipe,
        FilterDepartmentPipe,
        ErrorPageComponent
    ],
    providers: [AuthGuardTokenService],
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
        FilterByDepartmentComponent,
        DeptManagerDropdownComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
    ]
})
export class AppModule { }
