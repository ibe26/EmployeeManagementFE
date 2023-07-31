import { Department } from "./Department";

export interface DeptManager extends DeptManagerDTO {
    deptManagerID: number
}

export interface DeptManagerDTO{
    firstName: string,
    lastName: string,
    email: string,
    department: Department|null
}