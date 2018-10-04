import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CoursesComponent } from "./courses/courses.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoursesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
