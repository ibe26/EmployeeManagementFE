import { Department } from "./Department";

export interface DeptManager{
    deptManagerID: number,
    firstName: string,
    lastName: string,
    email: string,
    department: Department|null
}

export interface DeptManagerDTO{
    firstName: string,
    lastName: string,
    email: string,
    departmentID: number
}