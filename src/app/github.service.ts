import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private HttpClient:HttpClient) { }
  getUserDetails(userName):Observable<any>{
    return this.HttpClient.get('https://api.github.com/users/'+userName);
  }
  getUserRepos(userName):Observable<any>{
    return this.HttpClient.get('https://api.github.com/users/'+userName+'/repos');
  }
}

