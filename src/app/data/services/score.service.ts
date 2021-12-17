import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ScoreResponse } from '../models/score-response';
import { Answer } from '../models/answer';
import { Quiz } from '../models/quiz';
import { Observable } from 'rxjs';
import { StrapiResponse } from '../models/strapi-response';
import { Score } from '../models/score';
import { NormalizeService } from './normalize.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private url = `${environment.strapiUrl}/scores`;

  constructor(private http: HttpClient, private ns: NormalizeService) { }

  createScore(quiz: Quiz, answers: Answer[]): Observable<ScoreResponse> {
    return this.http.post<ScoreResponse>(this.url, { quiz, answers });
  }

  getScore(id: number): Observable<Score> {
    return this.http.get<StrapiResponse>(`${this.url}/${id}`)
      .pipe(this.ns.restructureData);
  }

  getScores(): Observable<Score[]> {
    return this.http.get<StrapiResponse>(this.url)
      .pipe(this.ns.restructureArrayedAttributes());
  }
}
