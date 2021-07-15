import { Question } from "./question";

export interface Quiz {
    Id: number;
    Name: string;
    Description: string;
    Questions: Question[];
}
