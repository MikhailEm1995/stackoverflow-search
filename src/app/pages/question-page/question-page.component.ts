import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GetInfoService} from '../../services/get-info/get-info.service';
import * as moment from 'moment';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  public answers: any;

  public noInfoMessage = 'Сперва выберите вопрос';

  private isAuthorDesc = false;
  private isDateDesc = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    GetInfoService.answers.subscribe((list) => {
      if (list.items) {
        this.answers = list.items.map(({
          owner: { display_name },
          is_accepted,
          creation_date,
          answer_id
        }) => ({
          display_name,
          is_accepted,
          date: moment(creation_date).format('lll'),
          link: `https://stackoverflow.com/a/${answer_id}`
        }));
      }
    });
  }

  handleBackBtnClick(): void {
    this.router.navigate(['/results']);
  }

  sortByAuthor(): void {
    this.isAuthorDesc = !this.isAuthorDesc;

    this.answers = this.answers.sort((curr, next) => {
      const currAuthor = curr.display_name.toLowerCase().charCodeAt(0);
      const nextAuthor = next.display_name.toLowerCase().charCodeAt(0);

      switch (true) {
        case isNaN(currAuthor) || isNaN(nextAuthor): return 0;
        case currAuthor === nextAuthor: return 0;
        case ((this.isAuthorDesc && currAuthor < nextAuthor) ||
          (!this.isAuthorDesc && currAuthor > nextAuthor)): return -1;
        default: return 1;
      }
    });
  }

  sortByDate(): void {
    this.isDateDesc = !this.isDateDesc;

    this.answers = this.answers.sort((curr, next) => {
      const currDate = +moment(curr.date).unix();
      const nextDate = +moment(next.date).unix();

      switch (true) {
        case currDate < nextDate: return -1;
        case currDate > nextDate: return 1;
        default: return 0;
      }
    });
  }
}
