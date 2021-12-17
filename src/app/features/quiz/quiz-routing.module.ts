import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/core/guards/logged-in.guard';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { ScoreComponent } from './pages/score/score.component';
import { ScoresComponent } from './pages/scores/scores.component';

const routes: Routes = [
    {
        path: '', component: QuizzesComponent
    },
    {
        path: '', canActivate: [LoggedInGuard], children: [
            {
                path: 'quiz/:id', component: QuizComponent
            },
            {
                path: 'quiz/:id/score', component: ScoreComponent
            },
            {
                path: '/score/:id', component: ScoreComponent
            },
            {
                path: '/scores', component: ScoresComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizRoutingModule { }