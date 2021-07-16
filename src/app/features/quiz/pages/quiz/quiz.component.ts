import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Quiz } from 'src/app/data/models/quiz';
import { QuizService } from 'src/app/data/services/quiz.service';
import { switchMap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAnswer } from 'src/app/data/models/answer';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {
  quiz!: Quiz;
  quizSub!: Subscription;
  quizForm: FormGroup = new FormGroup({});
  quizId = 0;

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) { }

  ngOnDestroy(): void {
    this.quizSub.unsubscribe();
  }

  ngOnInit(): void {
    this.quizSub = this.route.paramMap.pipe(
      switchMap(params => {
        this.quizId = Number(params.get('id'));
        return this.quizService.getQuiz(this.quizId);
      })
    ).subscribe(
      quiz => {
        this.quiz = quiz;

        quiz.Questions.forEach(question => {
          this.quizForm.addControl(question.id.toString(), new FormControl('', Validators.required));
        });
      }
    );
  }

  setAnswerValue(answ: UserAnswer) {
    this.quizForm.controls[answ.QuestionId].setValue(answ.Value);
  }

  score() {
    this.router.navigateByUrl(`/quiz/${this.quizId}/score`, { state: this.quizForm.value });
  }
}
