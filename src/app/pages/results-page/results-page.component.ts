import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search/search.service';
import {GetInfoService} from '../../services/get-info/get-info.service';
import {QuestionsService} from '../../services/questions/questions.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {

  public questionsList;

  constructor(
    private search: SearchService,
    private getInfo: GetInfoService,
    private questions: QuestionsService
  ) { }

  ngOnInit() {
    SearchService.questions.subscribe((list) => {
      this.questionsList = list.items.map(
        ({
           answer_count,
           title,
           tags,
           question_id,
           owner: { user_id, display_name }
        }) => ({ user_id, question_id, tags, display_name, title, answer_count }));
    });
  }
}
