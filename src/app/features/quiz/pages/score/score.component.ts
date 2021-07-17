import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { UserAnswer } from 'src/app/data/models/user-answer';
import { Score } from 'src/app/data/models/score';
import { QuizService } from 'src/app/data/services/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score$!: Observable<Score>;
  quizId = 0;

  constructor(private route: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit(): void {
    this.score$ = this.route.paramMap
      .pipe(
        map(params => {
          const state = window.history.state;
          this.quizId = Number(params.get('id'));

          let reqBody: UserAnswer[] = [];

          for (const [qstId, answ] of Object.entries(state)) {
            if (typeof answ === 'string') {
              reqBody.push({ QuestionId: Number(qstId), Value: answ });
            }
          }

          return reqBody;
        }),
        concatMap(body => this.quizService.score(this.quizId, body))
      );
  }

}
