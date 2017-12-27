// import from library
import { Component, OnInit } from '@angular/core';

// import service
import { LoginService } from '../login.service';
import { TitleService } from '../title.service';
import { UserService } from '../user.service';

// import class
import { User } from '../class/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  user: User;
  constructor(
    private titleService: TitleService,
    private loginService: LoginService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.titleService.title.subscribe(x => this.title = x);
    this.loginService.user.subscribe(x => this.user = x);
  }

}
