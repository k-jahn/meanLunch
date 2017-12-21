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
    this.router.navigate(['/profile']);
  }

  constructor(
    private titleService: TitleService,
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.titleService.title.next('Log In');
    this.loginService.userId.subscribe(x => this.userId = x);
    this.userService.getUser('').subscribe(x => this.users = x.map(y => y['_id']));
  }
}
