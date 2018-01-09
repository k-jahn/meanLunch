import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';

// import services
import { TitleService } from '../../title.service';
import { LoginService } from '../../login.service';
import { UserService } from '../../user.service';

// import class
import { User } from '../../class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userId = '';
  private users: string[] = [];

  loginAs(user: string): void {
    this.loginService.loginAs(user);
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginService.user.subscribe(x => this.userId = x ? x['_id'] : '');
    this.userService.getUser('').subscribe(x => this.users = x.map(y => y['_id']));
  }
}
