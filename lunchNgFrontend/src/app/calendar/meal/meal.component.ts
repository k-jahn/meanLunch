// import from library
import { Component, OnInit, Input } from '@angular/core';

// import service
import { MealService } from '../../meal.service';
import { UserService } from '../../user.service';

// import class
import { Meal } from '../../class/meal';
import { User } from '../../class/user';



@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() day: string;
  @Input() week: string;
  @Input() year: string;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  meal: Meal;
  cook: User;

  showMeal(prop: string): string {
    return this.meal ? this.meal[prop] : 'loading';
  }
  showCook(prop: string): string {
    return this.cook ? this.cook[prop] : 'loading';
  }


  constructor(
    private mealService: MealService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.mealService.getMeals([this.year, this.week, this.day].join('/')).subscribe(x => {
      this.meal = x[0];
      this.userService.getUser(this.meal.cookId).subscribe(u => this.cook = u[0]);
    });
  }

}
