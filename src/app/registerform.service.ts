import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Members{
  memberId:number;
  code:string;
  username:string;
  password:string;
  email:string;
  firstName:string;
  lastName:string;
  address:string;
}
@Injectable({
  providedIn: 'root'
})
export class RegisterformService {

  private readonly endpoint = 'http://localhost:52796/crowdo/signup/member';
  private readonly endpoint2 = 'http://localhost:52796/crowdo/member/login';
  constructor(private http: HttpClient) { }
  createMember(member:Members): Observable<Members> {
      return this.http.post<Members>(this.endpoint, member);  
  }
  login(member:Members): Observable<Members> {
      return this.http.post<Members>(this.endpoint2,member);  
}
}
