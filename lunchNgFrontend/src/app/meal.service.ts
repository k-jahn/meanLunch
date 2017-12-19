// import from library
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';

// import url
import { apiUrl } from './urls';

// import class
import { Meal } from './meal';

interface ApiResponse {
  meals: Meal[];
}


@Injectable()
export class MealService {

  constructor(
    private http: HttpClient
  ) { }

  getMeals(week): Observable<Meal[]> {
    return this.http.get<ApiResponse>(apiUrl + 'meal/')
      .pipe(
        map(r => r.meals.map(m => new Meal(m))),
        tap(r => window.console.log('fetched meals', r))
      );

  }
}
