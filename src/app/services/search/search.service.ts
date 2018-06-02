import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import {domain} from '../../../consts/api';

@Injectable()
export class SearchService {
  private currentQuery: string;
  private currentPage = 0;

  constructor(
    private http: HttpClient
  ) { }

  public getQuestions(query: string, page: number): Observable<any> {
    this.currentPage = 0;
    this.currentQuery = query;

    return this.http.get<any>(
      `${domain}search?order=desc&sort=relevance&site=stackoverflow&pagesize=10&page=${page}&intitle=${query}`
    );
  }

  public getNextPage(): Observable<any> {
    this.currentPage += 1;

    return this.getQuestions(this.currentQuery, this.currentPage);
  }

  public getPrevPage(): Observable<any> {
    if (this.currentPage === 0) {
      Observable.of(null);
    }

    this.currentPage -= 1;

    return this.getQuestions(this.currentQuery, this.currentPage);
  }


}
