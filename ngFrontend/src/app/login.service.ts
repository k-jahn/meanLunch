import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/';


@Injectable()
export class LoginService {
  userId = new BehaviorSubject<string>('');

  constructor() { }

  loginAs(id: string): boolean {
    this.userId.next(id);
    console.log('logging in as ' + id);
    return true;
  }
}
