import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAnswer } from '../models/answer';
import { Quiz } from '../models/quiz';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = `${environment.strapiUrl}/quizes`;

  constructor(private http: HttpClient) { }

  getQuizzes() {
    return this.http.get<Quiz[]>(this.url);
  }

  getQuiz(id: string) {
    return this.http.get<Quiz>(`${this.url}/${id}`);
  }

  score(id: string, answers: UserAnswer[]) {
    return this.http.post<Score>(`${this.url}/${id}/score`, answers);
  }
}
