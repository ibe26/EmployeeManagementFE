import { Department } from "./Department"
import { DeptManager } from "./DepartmentManager"

export interface Employee{
    empID: number,
    firstName: string,
    lastName: string,
    email: string,
    department: Department|null
    deptManager: DeptManager|null
}

export interface EmployeeDTO{
    firstName: string,
    lastName: string,
    email: string,
    departmentID:number,
    deptManagerID:number
}