import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { ScoreComponent } from './pages/score/score.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuestionNoPipe } from './pipes/question-no.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    QuestionComponent,
    QuizzesComponent,
    QuizComponent,
    ScoreComponent,
    QuestionNoPipe
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    NgbModule
  ]
})
export class QuizModule { }
