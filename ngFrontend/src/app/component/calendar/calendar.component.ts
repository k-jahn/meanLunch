// import from library
import { Component, OnInit } from '@angular/core';

// import service
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.titleService.title.next('Calender: Week bla');
  }

}
