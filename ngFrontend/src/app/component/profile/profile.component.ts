import { Component, OnInit } from '@angular/core';

// import services
import { LoginService } from '../../login.service';
import { TitleService } from '../../title.service';
import { UserService } from '../../user.service';

// import Class
import { User } from '../../class/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private titleService: TitleService,
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit(
  ) {
    this.titleService.title.next('Profile');
    this.loginService.user.subscribe(x => {
      this.user = x;
      this.titleService.title.next(this.user.name + '\'s profile');
    });
  }

}
