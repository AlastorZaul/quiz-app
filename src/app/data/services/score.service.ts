import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ScoreResponse } from '../models/score-response';
import { Answer } from '../models/answer';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private url = `${environment.strapiUrl}/scores`;

  constructor(private http: HttpClient) { }

  createScore(quiz: Quiz, answers: Answer[]) {
    return this.http.post<ScoreResponse>(this.url, answers);
  }

  getScore(id: number) {
    return this.http.get<ScoreResponse>(`${this.url}/${id}`);
  }

  getScores() {
    return this.http.get<ScoreResponse[]>(this.url);
  }
}
