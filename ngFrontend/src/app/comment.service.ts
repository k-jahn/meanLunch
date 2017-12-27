// import from library
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs/';
import { of } from 'rxjs/observable/of';
import { map, tap, filter } from 'rxjs/operators';

// import url
import { apiUrl } from './urls';

// import class
import { Comments } from './class/comments';

interface ApiResponse {
  comments: any;
}


@Injectable()
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  // public method
  public getUser(pars: string): Observable<Comments> {
    return this.http.get<ApiResponse>(apiUrl + 'comment/' + pars)
      .pipe(
        map(r => new Comments(r.comments)),
        tap(r => {
          window.console.log('fetched comments for ' + pars + ', caching', r);
        })
      );
  }
}
