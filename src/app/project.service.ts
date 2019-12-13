import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Projects{
  creator:string;
  title:string;
  description:string;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly endpoint = 'http://localhost:64122/crowdo/projects';
  constructor(private http: HttpClient) { }
  showProject(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.endpoint);  
}
}
