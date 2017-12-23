// import from library
import { Component, OnInit } from '@angular/core';

// import service
import { LoginService } from '../../login.service';
import { TitleService } from '../../title.service';
import { UserService } from '../../user.service';

// import class
import { User } from '../../class/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = '';
  user: User;
  constructor(
    private titleService: TitleService,
    private loginService: LoginService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.titleService.title.subscribe(x => this.title = x);
    this.loginService.user.subscribe(x => this.user = x );
  }

}
