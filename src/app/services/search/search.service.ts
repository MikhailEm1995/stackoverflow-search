import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import {domain} from '../../../consts/api';

@Injectable()
export class SearchService {
  private static currentQuery: string;
  private static currentPage = 0;

  public static questions: any;

  constructor(
    private http: HttpClient
  ) { }

  public getQuestions(query: string, page: number): Observable<any> {
    SearchService.currentPage = 0;
    SearchService.currentQuery = query;

    return this.http.get<any>(
      `${domain}search?order=desc&sort=relevance&site=stackoverflow&pagesize=10&page=${page}&intitle=${query}`
    );
  }

  public getNextPage(): Observable<any> {
    SearchService.currentPage += 1;

    return this.getQuestions(SearchService.currentQuery, SearchService.currentPage);
  }

  public getPrevPage(): Observable<any> {
    if (SearchService.currentPage === 0) {
      Observable.of(null);
    }

    SearchService.currentPage -= 1;

    return this.getQuestions(SearchService.currentQuery, SearchService.currentPage);
  }


}
