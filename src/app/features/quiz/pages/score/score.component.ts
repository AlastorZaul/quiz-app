import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Answer } from 'src/app/data/models/answer';
import { ScoreResponse } from 'src/app/data/models/score-response';
import { ScoreService } from 'src/app/data/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  scoreResp$: Observable<ScoreResponse> | undefined;
  quizId = 0;

  constructor(private route: ActivatedRoute, private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreResp$ = this.route.paramMap
      .pipe(
        switchMap(params => {
          const state = window.history.state;
          this.quizId = Number(params.get('id'));

          let reqBody: Answer[] = [];

          for (const [qstId, answ] of Object.entries(state)) {
            if (typeof answ === 'string') {
              reqBody.push({ question: { id: Number(qstId) }, value: answ });
            }
          }

          return iif(() => this.quizId > 0 && reqBody.length > 0, this.scoreService.createScore({ id: this.quizId }, reqBody));
        })
      );
  }
}
