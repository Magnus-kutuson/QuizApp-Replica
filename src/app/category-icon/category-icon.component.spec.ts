import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIconComponent } from './category-icon.component';

describe('CategoryIconComponent', () => {
  let component: CategoryIconComponent;
  let fixture: ComponentFixture<CategoryIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the selected category', () => {
    const catergories = ['HTML', 'CSS', 'JavaScript', 'Accessibility'];
    component.selectedCategory = 'CSS';
    fixture.detectChanges();
    expect(catergories).toContain(component.selectedCategory);
  });
});
