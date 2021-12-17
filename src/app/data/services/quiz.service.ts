import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quiz } from '../models/quiz';
import { StrapiResponse } from '../models/strapi-response';
import { NormalizeService } from './normalize.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = `${environment.strapiUrl}/quizzes`;

  constructor(private http: HttpClient, private ns: NormalizeService) { }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<StrapiResponse>(`${this.url}?populate=questions`)
      .pipe(this.ns.restructureArrayedAttributes('questions'));
  }

  getQuiz(id: number): Observable<Quiz> {
    return this.http.get<StrapiResponse>(`${this.url}/${id}`)
      .pipe(
        this.ns.restructureAttributes
      );
  }
}
