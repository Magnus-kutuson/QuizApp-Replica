import { ScoreComponent } from "./score.component";

describe('ScoreComponent', () => {  
    it('should create the component', () => {
      expect(new ScoreComponent()).toBeTruthy();
    });


    it('should accept empty string for selectedCategory', () => {
        const component = new ScoreComponent();
        component.selectedCategory = '';
        component.quizzes = [];
        component.correctAnswersCount = 0;
  
        expect(component.selectedCategory).toBe('');
        expect(component.quizzes).toEqual([]);
        expect(component.correctAnswersCount).toBe(0);
      });

});