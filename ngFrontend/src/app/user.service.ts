// import from library
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs/';
import { of } from 'rxjs/observable/of';
import { map, tap, filter } from 'rxjs/operators';

// import url
import { apiUrl } from './urls';

// import class
import { User } from './class/user';

interface ApiResponse {
  users: User[];
}


@Injectable()
export class UserService {
  private users = new BehaviorSubject<User[]>([]);
  private expiry = 1000 * 60 * 2; // 2 min
  private timeStamp = 0;


  constructor(
    private http: HttpClient
  ) { }

  // private method to get users from server
  private getUserFromApi(id: string): void {
    this.http.get<ApiResponse>(apiUrl + 'user/')
      .pipe(
      map(r => r.users.map(m => new User(m))),
      tap(r => {
        window.console.log('fetched users, caching', r);
      })
      ).subscribe(x => this.users.next(x));
  }

  // public method
  public getUser(id: string): Observable<User[]> {
    // check if fresh users are cached. if not, get new from api
    if (Date.now() - this.timeStamp > this.expiry) {
      this.timeStamp = Date.now();
      this.getUserFromApi(id);
    } else {
      console.log('fresh users in cache, ' + (-Date.now() + this.timeStamp + this.expiry) / 60000 + ' min until expiry');
    }
    // return filtered BehaviorSubject<User[]>
    return this.users.map(x => x.filter(y => id ? y['_id'] === id : true));
    }
}
