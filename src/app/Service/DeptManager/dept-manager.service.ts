import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DeptManager,DeptManagerDTO } from 'src/app/Interface/DepartmentManager';
import { API } from '../API';

@Injectable({
  providedIn: 'root'
})
export class DeptManagerService {

  constructor(private httpClient:HttpClient) { }

  public get():Observable<Array<DeptManager>>{
    return this.httpClient.get<Array<DeptManager>>(API.domainUrl+"/dept_manager/getAll");
  }
  
  public findById(id:number):Observable<DeptManager>{
    return this.httpClient.get<DeptManager>((API.domainUrl+`/dept_manager/get/${id}`));
  }
  public post(DeptManagerDTO:DeptManagerDTO):Observable<DeptManager>{
    return this.httpClient.post<DeptManager>(API.domainUrl+"/dept_manager/post",DeptManagerDTO);
  }
  public delete(id:number):Observable<HttpStatusCode>{
    return this.httpClient.delete<HttpStatusCode>(API.domainUrl+`/dept_manager/delete/${id}`);
  }
  public put(DeptManagerDTO:DeptManagerDTO,id:number):Observable<HttpStatusCode>{
    return this.httpClient.put<HttpStatusCode>(API.domainUrl+`/dept_manager/put/${id}`,DeptManagerDTO);
  }
}
