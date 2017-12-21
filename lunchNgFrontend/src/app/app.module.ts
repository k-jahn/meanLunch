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
import { CalendarComponent } from './component/calendar/calendar.component';
import { MealComponent } from './component/calendar/meal/meal.component';
import { NavComponent } from './component/nav/nav.component';
import { UserBadgeComponent } from './component/user-badge/user-badge.component';
import { MealDetailComponent } from './component/meal-detail/meal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavComponent,
    MealComponent,
    UserBadgeComponent,
    MealDetailComponent
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
