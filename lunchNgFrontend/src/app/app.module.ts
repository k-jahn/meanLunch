// import library modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// import custom services
import { MealService } from './meal.service';
import { UserService } from './user.service';

// import components
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MealComponent } from './calendar/meal/meal.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MealService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
