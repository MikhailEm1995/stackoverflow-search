import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchPageComponent} from '../../pages/search-page/search-page.component';
import {ResultsPageComponent} from '../../pages/results-page/results-page.component';
import {QuestionPageComponent} from '../../pages/question-page/question-page.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchPageComponent, data: { state: 'search' } },
  { path: 'results', component: ResultsPageComponent, data: { state: 'results' } },
  { path: 'question', component: QuestionPageComponent, data: { state: 'question' } },
  { path: '', redirectTo: '/search', pathMatch: 'full', data: { state: 'search' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
