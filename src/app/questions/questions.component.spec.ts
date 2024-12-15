import { QuestionsComponent } from './questions.component';

import  { Quiz } from '../quiz';

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;

  beforeEach(() => {
    component = new QuestionsComponent();
    component.quizzes = [{
      questions: [{
        question: 'test question',
        answer: 'correct'
      }]
    } as Quiz];
    component.questionIndex = 0;
    component.selectedAnswer = 'correct';
    component.correctAnswersCount = 0;
  });

  // When answer is selected, verify correct answer increases correctAnswersCount
  it('should increment correctAnswersCount when selected answer is correct', () => {
    component.submitAnswer();

    expect(component.correctAnswersCount).toBe(1);
    expect(component.isCorrect).toBe(true);
  });

  it('should show error message when no answer selected', () => {
    const component = new QuestionsComponent();
    component.selectedAnswer = null;
    component.showErrorMessage = false;

    component.submitAnswer();

    expect(component.showErrorMessage).toBe(true);
    expect(component.answerSubmitted).toBeFalsy();
  });

  it('should change answerSubmitted from false to true on first submission', () => {
    component.submitAnswer();
    expect(component.answerSubmitted).toBe(true);
  });

  it('should remain true on subsequent submissions', () => {
    component.submitAnswer(); // First submission
    component.submitAnswer(); // Second submission
    expect(component.answerSubmitted).toBe(true);
  });

  it('should set answerSubmitted regardless of answer correctness', () => {
    component.selectedAnswer = 'A1'; // Correct answer
    component.submitAnswer();
    expect(component.answerSubmitted).toBe(true);

    component.answerSubmitted = false; // Reset for next test
    component.selectedAnswer = 'Wrong Answer'; // Incorrect answer
    component.submitAnswer();
    expect(component.answerSubmitted).toBe(true);
  });
});