import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {domain} from '../../../consts/api';

@Injectable()
export class QuestionsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAuthorsQuestions(authorId: string): Observable<any> {
    return this.http.get<any>(`${domain}users/${authorId}/questions?order=desc&sort=votes&site=stackoverflow&pagesize=10`);
  }

  public getQuestionsWithTag(tag: string): Observable<any> {
    return this.http.get<any>(`${domain}questions?order=desc&sort=votes&site=stackoverflow&pagesize=10&tagged=${tag}`);
  }
}
