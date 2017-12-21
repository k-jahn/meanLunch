// import from library
import { Component, OnInit, Input } from '@angular/core';

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
  @Input() week: string;
  @Input() year: string;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  meal: Meal;


  showMeal(prop: string): string {
    return this.meal ? this.meal[prop] : 'loading';
  }



  constructor(
    private mealService: MealService,
  ) { }

  ngOnInit() {
    this.mealService.getMeals([this.year, this.week, this.day].join('/')).subscribe(x => {
      this.meal = x[0];
    });
  }

}
