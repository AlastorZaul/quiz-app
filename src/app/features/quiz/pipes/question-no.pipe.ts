import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionNo'
})
export class QuestionNoPipe implements PipeTransform {

  transform(questionsNo: number): string {
    return questionsNo > 1 || questionsNo === 0 ? `${questionsNo} questions` : `${questionsNo} question`;
  }

}
