import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Quiz } from 'src/app/data/models/quiz';
import { QuizService } from 'src/app/data/services/quiz.service';
import { switchMap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {
  quiz!: Quiz;
  quizSub!: Subscription;
  quizForm: FormGroup = new FormGroup({});

  constructor(private quizService: QuizService, private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.quizSub.unsubscribe();
  }

  ngOnInit(): void {
    this.quizSub = this.route.paramMap.pipe(
      switchMap(params => {
        const quizId = Number(params.get('id'));
        return this.quizService.getQuiz(quizId);
      })
    ).subscribe(
      quiz => {
        this.quiz = quiz;

        quiz.Questions.forEach(question => {
          this.quizForm.registerControl(question.id.toString(), new FormControl(''));
        });
      }
    );
  }

}
