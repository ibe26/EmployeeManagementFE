import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './Component/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { EmployeeEditComponent } from './Component/employee-edit/employee-edit.component';
import { SearchbarComponent } from "./Component/searchbar/searchbar.component";


@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        NavbarComponent,
        EmployeeEditComponent,
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
        MatCardModule,
        SearchbarComponent
    ]
})
export class AppModule { }
