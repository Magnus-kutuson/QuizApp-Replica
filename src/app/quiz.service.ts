import { Injectable } from '@angular/core';
import * as quizData from '../../public/data.json';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizzes: Quiz[] = quizData.quizzes;

  getQuizzes() {
    return this.quizzes;
  }
}