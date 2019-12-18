import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface Package {
  code: string;
  title: string;
  cost: number;
  details: string;
  rewards: string;
}

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private readonly endpoint = 'http://localhost:64122/crowdo/packages';

  constructor(private http: HttpClient) { }


  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(this.endpoint);
  }
}
