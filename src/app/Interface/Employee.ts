import { Department } from "./Department"
import { DeptManager } from "./DepartmentManager"

export interface Employee extends EmployeeDTO{
    empID: number,
    firstName: string,
    lastName: string,
    email: string,
    department: Department
    deptManager: DeptManager
}

export interface EmployeeDTO{
    firstName: string,
    lastName: string,
    email: string,
    departmentMenagerID:number,
}