import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
  
export class HomeComponent {
  @Output() categorySelected = new EventEmitter<string>();

  readonly categories = [
    { img: '/icon-html.svg', title: 'HTML' },
    { img: '/icon-css.svg', title: 'CSS' },
    { img: '/icon-js.svg', title: 'JavaScript' },
    { img: '/icon-accessibility.svg', title: 'Accessibility' },
  ];

  onCategorySelect(categoryTitle: string): void {
    this.categorySelected.emit(categoryTitle);
  }
}

