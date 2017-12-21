import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/';

@Injectable()
export class TitleService {
  constructor() { }
  title = new BehaviorSubject<string>('nav');
}
