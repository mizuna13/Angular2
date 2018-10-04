import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CoursesComponent } from "./courses/courses.component";
import { ContactComponent } from "./contact/contact.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent },
  { path: "courses", component: CoursesComponent },
  { path: "contact", component: ContactComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
