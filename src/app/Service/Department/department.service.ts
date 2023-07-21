import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Department,DepartmentDTO } from 'src/app/Interface/Department';
import { API } from '../API';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient:HttpClient) { }

  public get():Observable<Array<Department>>{
    return this.httpClient.get<Array<Department>>(API.domainUrl+"/department/getAll");
  }
  
  public findById(id:number):Observable<Department>{
    return this.httpClient.get<Department>((API.domainUrl+`/department/get/${id}`));
  }
  public post(DepartmentDTO:DepartmentDTO):Observable<Department>{
    return this.httpClient.post<Department>(API.domainUrl+"/department/post",DepartmentDTO);
  }
  public delete(id:number):Observable<HttpResponse<HttpStatusCode>>{
    return this.httpClient.delete<HttpStatusCode>(API.domainUrl+`/department/delete/${id}`,{observe: 'response'});
  }
  public put(DepartmentDTO:DepartmentDTO,id:number):Observable<HttpResponse<HttpStatusCode>>{
    return this.httpClient.put<HttpStatusCode>(API.domainUrl+`/department/put/${id}`,DepartmentDTO,{observe: 'response'});
  }
}
