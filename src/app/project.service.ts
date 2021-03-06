import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funding } from './fundings.service';

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
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly endpoint = 'http://localhost:64122/crowdo/projects';
  private readonly endpoint2 = 'http://localhost:64122/crowdo/myprojects';
  private readonly endpoint3 = 'http://localhost:64122/crowdo/delete/project';
  private readonly endpoint4 = 'http://localhost:64122/crowdo/edit/project';
  private readonly endpoint5 = 'http://localhost:64122/crowdo/project/new';
  private readonly endpoint6 = 'http://localhost:64122/crowdo/fundings';

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
  deleteProject(id: number): Observable<Projects> {
    return this.http.delete<Projects>(this.endpoint3 + '/' + id);
  }
  editProject(id: number, project: Projects): Observable<Projects> {
    return this.http.put<Projects>(`${this.endpoint4}/${id}`, project);
  }
  createProject(project: Projects): Observable<Projects> {
    return this.http.post<Projects>(this.endpoint5, project);
  }
  getFundedProjects(id:number): Observable<Funding[]> {
    return this.http.get<Funding[]>(this.endpoint6 + '/' + id);
  }
}
