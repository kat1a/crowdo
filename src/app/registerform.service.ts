import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from './project.service';
export interface Members {
  memberId: number;
  code: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
}
@Injectable({
  providedIn: 'root'
})
export class RegisterformService {

  private readonly endpoint = 'http://localhost:64122/crowdo/signup/member';
  private readonly endpoint2 = 'http://localhost:64122/crowdo/member/login';
  private readonly endpoint3 = 'http://localhost:64122/crowdo/edit/member';
  private readonly endpoint4 = 'http://localhost:64122/crowdo/member';
  constructor(private http: HttpClient) { }
  createMember(member: Members): Observable<Members> {
    return this.http.post<Members>(this.endpoint, member);
  }
  login(member: Members): Observable<Members> {
    return this.http.post<Members>(this.endpoint2, member);
  }
  editUser(id: number, member: Members): Observable<Members> {
    return this.http.put<Members>(`${this.endpoint3}/${id}`, member);
  }
  getUser(id: number): Observable<Members> {
    return this.http.get<Members>(this.endpoint4 + '/' + id);
  }
}
