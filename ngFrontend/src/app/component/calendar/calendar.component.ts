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
    this.week.subscribe(x => {
      if (x < -1) {
        this.titleService.title.next('Archive: ' + -x + ' weeks ago');
      } else if (x === -1) {
        this.titleService.title.next('Archive: Last week');
      } else if (x === 0 ) {
        this.titleService.title.next('Current week');
      } else if (x === 1 ) {
        this.titleService.title.next('Next week');
      } else {
        this.titleService.title.next(x + ' weeks from now');
      }
    });
  }

}
