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
}
