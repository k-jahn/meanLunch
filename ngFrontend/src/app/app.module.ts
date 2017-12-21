// import library modules
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// import custom services
import { LoginService } from './login.service';
import { MealService } from './meal.service';
import { TitleService } from './title.service';
import { UserService } from './user.service';

// import components
import { AppComponent } from './component/app.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { MealComponent } from './component/calendar/meal/meal.component';
import { NavComponent } from './component/nav/nav.component';
import { UserBadgeComponent } from './component/user-badge/user-badge.component';
import { MealDetailComponent } from './component/meal-detail/meal-detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavComponent,
    MealComponent,
    UserBadgeComponent,
    MealDetailComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    MealService,
    TitleService,
    UserService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
