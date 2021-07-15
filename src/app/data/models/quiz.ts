import { Question } from "./question";

export interface Quiz {
    Id: number;
    Title: string;
    Description: string;
    Questions: Question[];
}
