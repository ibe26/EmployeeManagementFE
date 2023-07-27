import { Injectable } from '@angular/core';
import { API } from '../API';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Employee, EmployeeDTO } from 'src/app/Interface/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly token=localStorage.getItem("token");
  constructor(private httpClient:HttpClient){}
  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token });

  public get():Observable<Array<Employee>>{
    return this.httpClient.get<Array<Employee>>(API.domainUrl+"/employee/getAll",{headers:this.headers});
  }
  
  public findById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>((API.domainUrl+`/employee/get/${id}`));
  }
  public post(employeeDTO:EmployeeDTO):Observable<Employee>{
    return this.httpClient.post<Employee>(API.domainUrl+"/employee/post",employeeDTO);
  }
  public delete(id:number):Observable<HttpResponse<HttpStatusCode>>{
    return this.httpClient.delete<HttpStatusCode>(API.domainUrl+`/employee/delete/${id}`,{observe: 'response'});
  }
  public put(employeeDTO:EmployeeDTO,id:number):Observable<HttpResponse<HttpStatusCode>>{
    return this.httpClient.put<HttpStatusCode>(API.domainUrl+`/employee/put/${id}`,employeeDTO,{observe: 'response'});
  }
}
