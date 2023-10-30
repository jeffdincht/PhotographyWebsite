import { Component } from '@angular/core';
import { categoryImage } from '../../Models/categoryImage.models';

@Component({
  selector: 'app-grid-categories',
  templateUrl: './grid-categories.component.html',
  styleUrls: ['./grid-categories.component.scss']
})
export class GridCategoriesComponent {
  images: categoryImage[] = [
    {
     category: "gravidas",
      text: 'Grávida',
      image:
        'assets/images/render-img/clara_11.jpg',
    },
    {
      category: "recem-nascido",
      text: 'Recém-nascido',
      image:
        'assets/images/render-img/Martim_51.jpg',
    },
    {
      category: "bebe",
      text: 'Bebé',
      image:
        'assets/images/render-img/7meses_5.jpg',
    },
    {
      category: "familias",
      text: 'Famílias',
      image:
        'assets/images/render-img/6meses_47.jpg',
    },


  ];

  constructor() {}

  ngOnInit(): void {}
}
