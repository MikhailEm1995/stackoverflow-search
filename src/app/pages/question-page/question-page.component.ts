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
}
