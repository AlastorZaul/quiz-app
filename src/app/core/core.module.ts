import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    TitleComponent
  ]
})
export class CoreModule { }
