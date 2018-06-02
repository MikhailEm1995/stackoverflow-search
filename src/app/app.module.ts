import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GetInfoService} from './services/get-info/get-info.service';
import {SearchService} from './services/search/search.service';
import {QuestionsService} from './services/questions/questions.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ResultsPageComponent,
    QuestionPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    GetInfoService,
    SearchService,
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
