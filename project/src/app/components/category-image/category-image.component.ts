import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-image',
  templateUrl: './category-image.component.html',
  styleUrls: ['./category-image.component.scss'],
})
export class CategoryImageComponent {
  @Input() image: string = '';
  @Input() text: string = '';
  @Input() category: string = '';
  constructor() {}
}
