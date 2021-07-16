import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit, OnDestroy {
  answers: object | undefined;
  answersSub!: Subscription;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.answersSub.unsubscribe();
  }

  ngOnInit(): void {
    this.answersSub = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(state => this.answers = state);
  }

}
