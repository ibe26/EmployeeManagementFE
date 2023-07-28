import { HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../API';
import { Login, LoginDTO } from 'src/app/Interface/Login';
import { RegisterDTO } from 'src/app/Interface/Regsiter';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private httpClient:HttpClient){}
  public token=localStorage.getItem("token");

  public login(loginDTO:LoginDTO):Observable<Login>{
    return this.httpClient.post<Login>(API.domainUrl+"/auth/login",loginDTO);
  }
  public tokenValid():Observable<boolean>{
    return this.httpClient.post<boolean>(API.domainUrl+"/auth/validate-token",this.token);
  }

  public register(registerDTO:RegisterDTO):Observable<HttpResponse<HttpStatusCode>>{
    return this.httpClient.post<HttpStatusCode>(API.domainUrl+"/auth/register",registerDTO,{observe: 'response'});
  }
}
