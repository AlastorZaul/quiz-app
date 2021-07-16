import { Question } from "./question";

export interface Quiz {
    id: number;
    Name: string;
    Description: string;
    Questions: Question[];
}
