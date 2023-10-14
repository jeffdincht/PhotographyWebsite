import { Component } from '@angular/core';
import { Image } from 'src/app/Models/images.models';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent {
  images: Image[] = [
    {
      image: '../../../assets/images/familia/6meses_43.jpg',
    },
    {
      image: '../../../assets/images/familia/6meses_47.jpg',
    },
    {
      image: '../../../assets/images/familia/6meses_49.jpg',
    },
  ];
}
