// import from library
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/';

// import service
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  week = new BehaviorSubject<number>(0);

  go(n: number): void {
    this.week.next(this.week.getValue() + n);
    console.log('week ' + n);
  }
  constructor(
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.week.subscribe(x => this.titleService.title.next('Calendar - 2017 Week ' + x));
  }

}
