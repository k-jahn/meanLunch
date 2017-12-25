// import from library
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TitleService } from '../../title.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private titleService: TitleService,
  ) { }

  mealDate: number[];

  ngOnInit() {
    this.titleService.title.next('Meal Detail');
    this.route.paramMap.subscribe(x => {
      // this.mealDate = [x.params['y'], x.params['w'], x.params['d']];
      this.titleService.title.next('Meal Detail ' + this.mealDate.reverse().join('.'));
    });
  }
  goBack(): void {
    this.location.back();
  }
}
