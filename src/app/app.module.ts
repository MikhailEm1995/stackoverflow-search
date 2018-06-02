import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ResultsPageComponent,
    QuestionPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
