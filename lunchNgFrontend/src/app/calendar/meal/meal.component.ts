// import from library
import { Component, OnInit, Input } from '@angular/core';

// import service
import { MealService } from '../../meal.service';

// import class
import { Meal } from '../../meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() date: string;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  meals: Meal[] = [];

  showMeal(prop): string {
    return this.meals[0] ? this.meals[+this.date][prop] : 'loading';
  }

  constructor(
    private mealService: MealService
  ) { }

  ngOnInit() {
    this.mealService.getMeals(0).subscribe(x => this.meals = x);
  }

}
