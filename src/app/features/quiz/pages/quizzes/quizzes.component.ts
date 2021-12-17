import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { QuizService } from 'src/app/data/services/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes$ = this.quizService.getQuizzes();
  isLoggedIn = false;

  constructor(
    private quizService: QuizService,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (this.auth.checkIfLoggedIn()) {
      this.isLoggedIn = true;
    }

    this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}
