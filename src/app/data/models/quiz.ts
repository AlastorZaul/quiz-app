import { Question } from "./question";

export interface Quiz {
    Title: string;
    Description: string;
    Questions: Question[];
}
