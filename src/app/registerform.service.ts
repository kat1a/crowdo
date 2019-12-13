import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterformService {

  private readonly endpoint = 'http://localhost:64122/crowdo/signup/member';
  constructor(private http: HttpClient) { }
  createMember(member:any): Observable<any> {
      return this.http.post<any>(this.endpoint, member);  
  }
}
