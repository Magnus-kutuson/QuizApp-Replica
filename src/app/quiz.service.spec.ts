import { ComponentFixture, TestBed } from "@angular/core/testing";

import { QuizService } from "./quiz.service";
import { Quiz } from "./quiz";
import * as quizData from "../../public/data.json";

describe('QuizService', () => {
    let service: QuizService;
    const quizzes: Quiz[] = quizData.quizzes;
    jest.mock('../../public/data.json', () => ({
        quizzes: quizzes
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({providers: [QuizService]});
        service = TestBed.inject(QuizService);
      });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return quizzes', () => {
        expect(service.getQuizzes()).toEqual(quizzes);
      });
});