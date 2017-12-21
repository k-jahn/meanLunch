// import from library
import { Component, OnInit, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';


// import service
import { UserService } from '../../user.service';

// import class
import { User } from '../../class/user';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.css']
})
export class UserBadgeComponent implements OnInit {
  @Input() userId: string;
  user: User;
  constructor(
    private userService: UserService
  ) { }
 
  ngOnInit() {
    this.userService.getUser(this.userId).subscribe(u => this.user = u[0]);
  }

}
