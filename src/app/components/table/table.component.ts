import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() interactive: boolean;
  @Input() questions: any;

  @Input() onAuthorClick: Function;
  @Input() onTopicClick: Function;
  @Input() onTagClick: Function;

  private isAuthorDesc = false;
  private isTitleDesc = false;
  private isAnswersDesc = false;

  constructor() {}

  handleAuthorClick(userId: number): void {
    this.onAuthorClick(userId);
  }

  handleTopicClick(questionId: number): void {
    this.onTopicClick(questionId);
  }

  handleTagClick(tag: string): void {
    this.onTagClick(tag);
  }

  sortByAuthor(): void {
    this.isAuthorDesc = !this.isAuthorDesc;

    this.questions = this.questions.sort((curr, next) => {
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

  sortByTitle(): void {
    this.isTitleDesc = !this.isTitleDesc;

    this.questions = this.questions.sort((curr, next) => {
      const currTitle = curr.title.toLowerCase().charCodeAt(0);
      const nextTitle = next.title.toLowerCase().charCodeAt(0);

      switch (true) {
        case isNaN(currTitle) || isNaN(nextTitle): return 0;
        case currTitle === nextTitle: return 0;
        case ((this.isTitleDesc && currTitle < nextTitle) ||
          (!this.isTitleDesc && currTitle > nextTitle)): return -1;
        default: return 1;
      }
    });
  }

  sortByAnswers(): void {
    this.isAnswersDesc = !this.isAnswersDesc;

    this.questions = this.questions.sort((curr, next) => {
      const currAnswers = curr.answer_count;
      const nextAnswers = next.answer_count;

      switch (true) {
        case currAnswers === nextAnswers: return 0;
        case ((this.isAnswersDesc && currAnswers < nextAnswers) ||
          (!this.isAnswersDesc && currAnswers > nextAnswers)): return -1;
        default: return 1;
      }
    });
  }
}
