import { UserAnswer } from "./answer";
import { Quiz } from "./quiz";

export interface Score {
    Quiz: Quiz;
    ScoredAnswers: UserAnswer;
    Score: number;
}
