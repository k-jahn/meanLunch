// import from library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import components to route
import { CalendarComponent } from './component/calendar/calendar.component';
import { LoginComponent } from './component/login/login.component';
import { MealDetailComponent } from './component/meal-detail/meal-detail.component';
import { ProfileComponent } from './component/profile/profile.component';


// define routes
const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'meal/:y/:w/:d', component: MealDetailComponent },
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }