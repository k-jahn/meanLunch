import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

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
  userId: string;
  user: User;

  constructor(
    private titleService: TitleService,
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit(
  ) {
    this.titleService.title.next('Profile');
    this.loginService.userId.subscribe(x => {
      this.userId = x;
      this.userService.getUser(this.userId).subscribe(y => this.user = y[0]);
    });
  }

}
