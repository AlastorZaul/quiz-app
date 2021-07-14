import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './pages/question/question.component';
import { QuizesComponent } from './pages/quizes/quizes.component';
import { ScoreComponent } from './pages/score/score.component';



@NgModule({
  declarations: [
    QuestionComponent,
    QuizesComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
