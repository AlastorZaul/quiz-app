import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { ScoreComponent } from './pages/score/score.component';
import { QuizComponent } from './pages/quiz/quiz.component';



@NgModule({
  declarations: [
    QuestionComponent,
    QuizzesComponent,
    QuizComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
