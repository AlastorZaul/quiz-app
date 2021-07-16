import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/data/models/quiz';
import { QuizService } from 'src/app/data/services/quiz.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz$!: Observable<Quiz>;
  quizId: number = 0;

  constructor(private quizService: QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.quiz$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.quizId = Number(params.get('id'));
        return this.quizService.getQuiz(this.quizId);
      })
    );
  }

}
