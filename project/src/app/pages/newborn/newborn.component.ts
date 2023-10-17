import { Component } from '@angular/core';
import { Image } from 'src/app/Models/images.models';

@Component({
  selector: 'app-newborn',
  templateUrl: './newborn.component.html',
  styleUrls: ['./newborn.component.scss']
})
export class NewbornComponent {
  images: Image[] = [
    {
      image: '../../../assets/images/recem-nascido/Martim_4.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_8.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_13.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_19.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_20.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_21.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_23.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_29.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_32.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_33.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_42.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_43.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_44.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_45.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_47.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_49.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Martim_51.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Newborn_26.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Sara_12.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Sara_16.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Sara_21.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Sara_23.jpg',
    },
    {
      image: '../../../assets/images/recem-nascido/Sara_42.jpg',
    },
  ];
}
