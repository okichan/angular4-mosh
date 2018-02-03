import { DataService } from './services/data.service';
import { CoursesService } from './components/courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SummaryPipe } from './summary.pipe';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavouritesComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CoursesService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
