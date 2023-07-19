import { Injectable } from '@angular/core';
import { API } from '../API';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Employee, EmployeeDTO } from 'src/app/Interface/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient:HttpClient){}

  public getEmployees():Observable<Array<Employee>>{
    return this.httpClient.get<Array<Employee>>(API.domainUrl+"/employee/getAll");
  }
  
  public findById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>((API.domainUrl+`/employee/get/${id}`));
  }
  public postEmployee(employeeDTO:EmployeeDTO):Observable<Employee>{
    return this.httpClient.post<Employee>(API.domainUrl+"/employee/post",employeeDTO);
  }
  public deleteEmplyoee(id:number):Observable<HttpStatusCode>{
    return this.httpClient.delete<HttpStatusCode>(API.domainUrl+`employee/delete/${id}`);
  }
  public putEmployee(employeeDTO:EmployeeDTO,id:number):Observable<HttpStatusCode>{
    return this.httpClient.put<HttpStatusCode>(API.domainUrl+`employee/put/${id}`,employeeDTO);
  }
}
