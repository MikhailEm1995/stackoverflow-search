import { Component } from '@angular/core';
import {SearchService} from '../../services/search/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  public searchQuery: string;
  public message = '';

  constructor(
    private search: SearchService,
    private router: Router
  ) {}

  public handleSearchClick(): void {
    this.search.getQuestions(this.searchQuery, 1)
      .subscribe(
        (res) => {
          SearchService.questions = res;
          this.router.navigate(['/results']);
        },
        (err) => {
          this.message = err.message;
        }
      );
  }
}
