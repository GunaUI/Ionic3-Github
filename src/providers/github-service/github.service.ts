import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';


import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';

import { Repository } from '../../models/repositories.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

@Injectable()
export class GithubServiceProvider {

  private baseURL : string = 'https://api.github.com/users';
  private repoUrl : string = 'repos';

  constructor(public http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }
  getUserInformation(username : string): Observable<User> {
    return this.http.get(`${this.baseURL}/${username}`)
              .do(this.logData)
              .map(this.extractData)
              .do(this.logData)
              .catch(this.errorHandler)
  }
  getUserRepository(username : string): Observable<Repository[]> {
    return this.http.get(`${this.baseURL}/${username}/${this.repoUrl}`)
              .do(this.logData)
              .map(this.extractData)
              .do(this.logData)
              .catch(this.errorHandler)
  }

  private logData(response : Response){
    console.log(response)
  }

  private extractData(response : Response){
    return response.json();
  }

  private errorHandler(error : Response | any){
    return Observable.throw(error.json().error || "Server Error")
  }
  /*
  Finding the username within USER_LIST, equal to the username passed in.
  Returning the results as an Observable.
   */
  mockgetUserInfo(username : string) : Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);

  }
  mockgetRepoInfo(username : string) : Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));

  }

}
