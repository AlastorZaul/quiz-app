import { Answer} from "./answer";
import { Quiz } from "./quiz";

export interface Score {
    quiz: Quiz;
    scoredAnswers: Answer[];
    score: number;
    questionCount: number;
}
