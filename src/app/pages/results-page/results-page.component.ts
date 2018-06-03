import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search/search.service';
import {GetInfoService} from '../../services/get-info/get-info.service';
import {QuestionsService} from '../../services/questions/questions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {

  public questionsList: any;
  public isQuestions = false;

  public panelTitle: string;
  public isPanelOpen = false;
  public panelInfo: any;

  public noInfoMessage = 'Нечего отобразить. Введите поисковый запрос';

  constructor(
    private search: SearchService,
    private getInfo: GetInfoService,
    private questions: QuestionsService,
    private router: Router
  ) {}

  ngOnInit() {
    SearchService.questions.subscribe(
      (list) => {
        if (list.items) {
          this.isQuestions = true;

          this.questionsList = this.mapResponse(list.items);
        }
      }, this.onError);

    QuestionsService.questions.subscribe(
      (list) => {
        if (list.items) {
          this.isPanelOpen = true;

          this.panelInfo = this.mapResponse(list.items);
        }
      }, this.onError);
  }

  private onError(err): void {
    this.noInfoMessage = `Произошла ошибка: ${err.message}`;
  }

  private mapResponse(list): any {
    return list.map(
      ({
         answer_count,
         title,
         tags,
         question_id,
         owner: { user_id, display_name }
      }) => ({ user_id, question_id, tags, display_name, title, answer_count }));
  }

  public handleBackBtnClick(): void {
    this.router.navigate(['/search']);
  }

  public onAuthorClick = (userId: number): void => {
    this.questions.getAuthorsQuestions(userId)
      .subscribe(
        (res) => {
          if (res.items) {
            this.panelTitle = `Популярные вопросы автора`;
            QuestionsService.questions.next(res);
          } else {
            this.panelTitle = 'Нет информации';
          }
        }, this.onError);
  }

  public onTopicClick = (questionId: number): void => {
    this.getInfo.getAnswers(questionId).subscribe(
      (res) => {
        GetInfoService.answers.next(res);
        this.router.navigate(['/question']);
      }, this.onError);
  }

  public onTagClick = (tag: string): void => {
    this.questions.getQuestionsWithTag(tag).subscribe(
      (res) => {
        if (res.items) {
          this.panelTitle = `Популярные вопросы по тегу ${tag}`;
          QuestionsService.questions.next(res);
        } else {
          this.panelTitle = 'Нет информации';
        }
      }, this.onError);
  }
}
