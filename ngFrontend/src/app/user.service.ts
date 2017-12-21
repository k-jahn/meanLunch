// import from library
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';

// import url
import { apiUrl } from './urls';

// import class
import { User } from './class/user';

interface ApiResponse {
  users: User[];
}


@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(par): Observable<User[]> {
    return this.http.get<ApiResponse>(apiUrl + 'user/' + par)
      .pipe(
      map(r => r.users.map(m => new User(m))),
      tap(r => window.console.log('fetched users', r))
      );

  }
}
