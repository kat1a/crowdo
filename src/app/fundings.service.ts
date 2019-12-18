import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Members } from './registerform.service';

export interface Funding {
  BackerId: number;
  ProjectId: number;
  Package: string;
  Number: number;
}



@Injectable({
  providedIn: 'root'
})
export class FundingsService {

  private readonly endpoint = 'http://localhost:64122/crowdo/fund-project';

  constructor(private http: HttpClient) { }

  fundProject(funding: Funding): Observable<Funding> {
    return this.http.post<Funding>(this.endpoint, funding);
  }

}
