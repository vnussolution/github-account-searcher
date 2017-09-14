import { IUser, IRepository } from './../../models/interfaces';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


import { USER_LIST, REPOSITORY_LIST } from '../../mocks/mocks'
/*
  Generated class for the GitHubServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubServicesProvider {

  private baseUrl = 'https://api.github.com/users';

  constructor(private http: Http) {
    console.log('Hello GitHubServicesProvider Provider');
  }

  getUserInfo(username: string): Observable<IUser> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do((data: Response) => console.log('before: ', data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log('after: ', data))
      .catch((error: Response) => Observable.throw(error.json().error || 'servere error'));
  }

  getRepoInfo(username: string): Observable<IRepository[]> {
    return this.http.get(`${this.baseUrl}/${username}/repos`)
      .do((data: Response) => console.log('before: ', data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log('after: ', data))
      .catch((error: Response) => Observable.throw(error.json().error || 'servere error'));
  }

  mockGetUserInfo(username: string): Observable<IUser> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  mockGetRepoInfo(username: string): Observable<IRepository[]> {
    return Observable.of(REPOSITORY_LIST.filter(data => data.owner.name === username));
  }
}
