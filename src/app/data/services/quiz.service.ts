import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = `${environment.strapiUrl}/quizes`;

  constructor(private http: HttpClient) { }

  getQuizes() {
    return this.http.get<Quiz[]>(this.url);
  }
}
