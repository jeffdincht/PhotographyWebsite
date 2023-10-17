import { Component } from '@angular/core';
import { Image } from 'src/app/Models/images.models';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss'],
})
export class BabyComponent {
  images: Image[] = [
    {
      image: '../../../assets/images/bebe/2meses_13.jpg',
    },
    {
      image: '../../../assets/images/bebe/2meses_7.jpg',
    },
    {
      image: '../../../assets/images/bebe/2meses_9.jpg',
    },
    {
      image: '../../../assets/images/bebe/3meses_11.jpg',
    },
    {
      image: '../../../assets/images/bebe/3meses_14.jpg',
    },
    {
      image: '../../../assets/images/bebe/5meses_1.jpg',
    },
    {
      image: '../../../assets/images/bebe/5meses_10.jpg',
    },
    {
      image: '../../../assets/images/bebe/5meses_12.jpg',
    },
    {
      image: '../../../assets/images/bebe/5meses_2.jpg',
    },
    {
      image: '../../../assets/images/bebe/5meses_27.jpg',
    },
    {
      image: '../../../assets/images/bebe/5meses_33.jpg',
    },
    {
      image: '../../../assets/images/bebe/5meses_8.jpg',
    },
    {
      image: '../../../assets/images/bebe/5meses_9.jpg',
    },
    {
      image: '../../../assets/images/bebe/6meses_20.jpg',
    },
    {
      image: '../../../assets/images/bebe/6meses_24.jpg',
    },
    {
      image: '../../../assets/images/bebe/6meses_38.jpg',
    },
    {
      image: '../../../assets/images/bebe/7meses_4.jpg',
    },
    {
      image: '../../../assets/images/bebe/7meses_5.jpg',
    },
    {
      image: '../../../assets/images/bebe/8meses_12.jpg',
    },
    {
      image: '../../../assets/images/bebe/8meses_23.jpg',
    },
    {
      image: '../../../assets/images/bebe/8meses_3.jpg',
    },
    {
      image: '../../../assets/images/bebe/8meses_33.jpg',
    },
    {
      image: '../../../assets/images/bebe/8meses_38.jpg',
    },
    {
      image: '../../../assets/images/bebe/8meses_7.jpg',
    },
  ];
}
