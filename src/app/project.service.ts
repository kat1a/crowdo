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

  private readonly endpoint = 'http://localhost:52796/crowdo/projects';
  private readonly endpoint2 = 'http://localhost:52796/crowdo/myprojects';
  private readonly endpoint3 = 'http://localhost:52796/crowdo/delete/project';
  private readonly endpoint4 = 'http://localhost:52796/crowdo/edit/project';

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
  deleteProject(id:number): Observable<Projects> {
    return this.http.delete<Projects>(this.endpoint3 + '/' + id);
  }
  editProject(id:number,project:Projects):Observable<Projects> {
    return this.http.put<Projects>(this.endpoint4 + '/' + id,project);
  }
}
