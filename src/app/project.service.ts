import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Projects {
  projectId: number;
  code: string;
  creator: string;
  title: string;
  category: string;
  description: string;
  media: string;
  startDate: Date;
  endDate: Date;
  packages: string;
  numberOfRequested: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly endpoint = 'http://localhost:64122/crowdo/projects';
  private readonly endpoint2 = 'http://localhost:64122/crowdo/myprojects';

  constructor(private http: HttpClient) { }


  showProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.endpoint);
  }

  getProjectById(id: number): Observable<Projects> {
    return this.http.get<Projects>(this.endpoint + '/' + id);
  }
  getUsersProjects(id: number): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.endpoint2 + '/' + id);
  }
}
