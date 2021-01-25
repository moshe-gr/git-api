import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitInfo } from '../models/git-info';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {
  private gitApi = 'https://api.github.com/users/';

  constructor(private httpClient: HttpClient) { }

  get(userName: string): Observable<any>{
     return this.httpClient.get(`${this.gitApi}${userName}`);
  }
}