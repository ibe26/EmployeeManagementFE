import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeeDTO } from 'src/app/Interface/Employee';
import { API } from '../API';
import { Login, LoginDTO } from 'src/app/Interface/Login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient){}

  public login(loginDTO:LoginDTO):Observable<Login>{
    return this.httpClient.post<Login>(API.domainUrl+"/auth/login",loginDTO);
    
  }
}
