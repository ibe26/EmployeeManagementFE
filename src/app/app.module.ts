import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { EmployeeComponent } from './Component/EmployeeComponents/employee/employee.component';
import { EmployeeListComponent } from './Component/EmployeeComponents/employee-list/employee-list.component';
import { NavbarComponent } from './Component/GlobalComponents/navbar/navbar.component';
import { EmployeeEditComponent } from './Component//EmployeeComponents/employee-edit/employee-edit.component';
import { SearchbarComponent } from "./Component/GlobalComponents/searchbar/searchbar.component";
import { AddEmployeeComponent } from './Component/EmployeeComponents/employee-add/add-employee.component';

import { SearchBarFilterPipe } from './Pipe/search-bar-filter.pipe';
import { FilterDepartmentPipe } from './Pipe/filter-department.pipe';
import { Routes,RouterModule } from '@angular/router';
import { FilterByDepartmentComponent } from "./Component/DepartmentComponents/department-dropdown/department-dropdown.component";
import { DeptManagerDropdownComponent } from './Component/DepartmentManagerComponents/dept-manager-dropdown/dept-manager-dropdown.component';
import { LoginComponent } from './Component/GlobalComponents/login/login.component';
import { RegisterComponent } from './Component/GlobalComponents/register/register.component';
import { AuthGuardTokenService } from './Service/AuthGuard/auth-guard-token.service';
import { ErrorPageComponent } from './Component/GlobalComponents/error-page/error-page.component';
import { EmployeeDepartmentNullPipe } from './Pipe/employee-department-null.pipe';
import { DepartmentManagerListComponent } from './Component/DepartmentManagerComponents/department-manager-list/department-manager-list.component';
import { DepartmentManagerComponent } from './Component/DepartmentManagerComponents/department-manager/department-manager.component';
import { DepartmentListComponent } from './Component/DepartmentComponents/department-list/department-list.component';
import { ManagerAddComponent } from './Component/DepartmentManagerComponents/manager-add/manager-add.component';
import { ManagerEditComponent } from './Component/DepartmentManagerComponents/manager-edit/manager-edit.component';
import { TokenInterceptorService } from './Service/User/token-interceptor.service';

const routes:Routes=[
{path:'employee-list',component:EmployeeListComponent,canActivate:[AuthGuardTokenService]},
{path:'',redirectTo:'employee-list',pathMatch:'full'},
{path:'employee-edit/:id',component:EmployeeEditComponent,canActivate:[AuthGuardTokenService]},
{path:'employee-add',component:AddEmployeeComponent,canActivate:[AuthGuardTokenService]},
{path:'department-manager-list',component:DepartmentManagerListComponent,canActivate:[AuthGuardTokenService]},
{path:'department-manager-add',component:ManagerAddComponent,canActivate:[AuthGuardTokenService]},
{path:'department-manager-edit/:id',component:ManagerEditComponent,canActivate:[AuthGuardTokenService]},
{path:'department-list',component:DepartmentListComponent,canActivate:[AuthGuardTokenService]},
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
        ErrorPageComponent,
        EmployeeDepartmentNullPipe,
        DepartmentManagerListComponent,
    ],
    providers: [AuthGuardTokenService,{
        provide:HTTP_INTERCEPTORS,
        useClass:TokenInterceptorService,
        multi:true
    }],
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
        DepartmentListComponent,
        DepartmentManagerComponent,
        ManagerAddComponent,
        ManagerEditComponent,

    ]
})
export class AppModule { }
