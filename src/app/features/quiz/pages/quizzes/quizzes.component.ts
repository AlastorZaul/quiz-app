import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { QuizService } from 'src/app/data/services/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent {
  quizzes$ = this.quizService.getQuizzes();

  authStatus!: Subscription;

  constructor(
    private quizService: QuizService,
    public auth: AuthenticationService
  ) { }
}
