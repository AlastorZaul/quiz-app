import { UserAnswer } from "./user-answer";
import { Quiz } from "./quiz";

export interface Score {
    Quiz: Quiz;
    ScoredAnswers: UserAnswer[];
    Score: number;
    QuestionCount: number;
}