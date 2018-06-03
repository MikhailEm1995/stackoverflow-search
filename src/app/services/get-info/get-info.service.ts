import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {domain} from '../../../consts/api';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GetInfoService {

  public static answers: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient
  ) { }

  public getAnswers(questionId: number): Observable<any> {
    return this.http.get<any>(
      `${domain}questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow`
    );
  }

}
