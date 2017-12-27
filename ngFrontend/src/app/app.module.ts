// import library modules
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// import custom services
import { CommentService } from './comment.service';
import { LoginService } from './login.service';
import { MealService } from './meal.service';
import { TitleService } from './title.service';
import { UserService } from './user.service';

// import components
import { AppComponent } from './component/app.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { CommentComponent } from './component/comment/comment.component';
import { MealComponent } from './component/calendar/meal/meal.component';
import { UserBadgeComponent } from './component/user-badge/user-badge.component';
import { MealDetailComponent } from './component/meal-detail/meal-detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MealComponent,
    UserBadgeComponent,
    MealDetailComponent,
    ProfileComponent,
    LoginComponent,
    CommentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CommentService,
    LoginService,
    MealService,
    TitleService,
    UserService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
