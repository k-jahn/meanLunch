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
  meal: Meal;
  empty = false;




  constructor(
    private mealService: MealService,
  ) { }

  ngOnInit() {
    this.mealService.getMeals([this.year, this.week, this.day].join('/')).subscribe(x => {
      if (x.length) {
        this.meal = x[0];
      } else {
        this.empty = true;
      }
    });
  }

}
