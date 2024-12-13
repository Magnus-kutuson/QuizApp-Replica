// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { QuestionsComponent } from './questions.component';
// import { Quiz } from '../quiz';
// import { By } from '@angular/platform-browser';

// describe('QuestionsComponent', () => {
//   let component: QuestionsComponent;
//   let fixture: ComponentFixture<QuestionsComponent>;
//   const mockQuizzes: Quiz[] = []

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [QuestionsComponent],
//     })

//     fixture = TestBed.createComponent(QuestionsComponent);
//     component = fixture.componentInstance;
//     component.quizzes = mockQuizzes;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//        // Handle empty or undefined quizzes array
//        it('should handle undefined quizzes array without errors', () => {
//         const component = new QuestionsComponent();
//         component.quizzes = undefined as unknown as Quiz[];
    
//         expect(() => {
//           component.currentQuizQuestion();
//         }).toThrow();
    
//         expect(() => {
//           component.nextQuestion();
//         }).toThrow();
    
//         expect(() => {
//           component.isLastQuestion();
//         }).toThrow();
//       });
      
//   it('should display the current question', () => {
//     const questionText = fixture.debugElement.query(By.css('.question-text')).nativeElement.textContent;
//     expect(questionText).toContain(mockQuizzes[0].questions[0].question);
//   });

//   it('should allow selecting an answer', () => {
//     component.selectAnswer('A');
//     expect(component.selectedAnswer).toBe('A');
//   });

//   it('should not allow selecting an answer after submission', () => {
//     component.selectAnswer('A');
//     component.submitAnswer();
//     component.selectAnswer('B');
//     expect(component.selectedAnswer).toBe('A');
//   });

//   it('should emit the correctAnswersCount on quiz completion', () => {
//     spyOn(component.quizFinished, 'emit');

//     // Simulate completing all questions
//     component.quizIndex = mockQuizzes.length - 1;
//     component.questionIndex = mockQuizzes[1].questions.length - 1;
//     component.nextQuestion();

//     expect(component.quizFinished.emit).toHaveBeenCalledWith(component.correctAnswersCount);
//   });

//   it('should save progress to localStorage', () => {
//     spyOn(localStorage, 'setItem');
//     component.correctAnswersCount = 2;
//     expect(localStorage.setItem).toHaveBeenCalledWith(
//       'quizProgress',
//       JSON.stringify({
//         correctAnswersCount: 2,
//         quizIndex: 0,
//         questionIndex: 0,
//       })
//     );
//   });

//   it('should load progress from localStorage', () => {
//     const progress = {
//       correctAnswersCount: 1,
//       quizIndex: 1,
//       questionIndex: 1,
//     };
//     spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(progress));
//     expect(component.correctAnswersCount).toBe(1);
//     expect(component.quizIndex).toBe(1);
//     expect(component.questionIndex).toBe(1);
//   });

//   it('should reset question state after nextQuestion()', () => {
//     component.nextQuestion();
//     expect(component.answerSubmitted).toBeTruthy();
//     expect(component.selectedAnswer).toBeNull();
//     expect(component.isCorrect).toBeNull();
//   });
// });
