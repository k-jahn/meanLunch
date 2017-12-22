// import from library
import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/';


// import service
import { MealService } from '../../../meal.service';


// import class
import { Meal } from '../../../class/meal';
import { User } from '../../../class/user';



@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() day: string;
  @Input() week: Observable<string>;
  @Input() year: string;
  meal: Meal;
  empty = false;




  constructor(
    private mealService: MealService,
  ) { }

  ngOnInit() {
    this.week.subscribe(y => {
      this.mealService.getMeals([this.year, y, this.day].join('/')).subscribe(x => {
        if (x.length) {
          this.meal = x[0];
        } else {
          this.meal = undefined;
          this.empty = true;
        }
      });
    });
  }

}
