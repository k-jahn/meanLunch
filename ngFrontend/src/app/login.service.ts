// import from library
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/';

// import class
import { User } from './class/user';

// import service
import { UserService } from './user.service';

@Injectable()
export class LoginService {
  user = new BehaviorSubject<User>(null);


  constructor(
    private userService: UserService,
  ) { }

  // mockup! replace with something a little more serious
  loginAs(id: string): boolean {
    // todo : control for bad userID
    this.userService.getUser(id).subscribe(x => this.user.next(x[0]));
    console.log('logging in as ' + id);
    return true;
  }
}
