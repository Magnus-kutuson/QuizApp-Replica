import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should select a category', () => {
    expect(component.categories.length).toBe(4);
    expect(component.categories[0].title).toBe('HTML');
  });

  it('should emit title when category is selected', () => {  
    const categoryTitle = ['HTML', 'CSS', 'JavaScript', 'Accessibility'][0];
    const spy = jest.spyOn(component.categorySelected, 'emit');
    component.onCategorySelect(categoryTitle);
    expect(spy).toHaveBeenCalledWith(expect.stringMatching(/^(HTML|CSS|JavaScript|Accessibility)$/));
  });
});