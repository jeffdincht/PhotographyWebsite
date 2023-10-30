import { Component } from '@angular/core';
import { CMSImage, CMSNewBornResponse, Image } from 'src/app/Models/images.models';
import { HygraphService } from 'src/app/services/hygraph.service';

@Component({
  selector: 'app-newborn',
  templateUrl: './newborn.component.html',
  styleUrls: ['./newborn.component.scss']
})
export class NewbornComponent {
  images!: CMSImage[];
  constructor(private HygraphService:HygraphService) {
    this.HygraphService;
  }
  getPhoto(){
    const response = this.HygraphService.getPhotoNewBorn()
    .subscribe((response: CMSNewBornResponse): void => {

      this.images = response.data.recemNascidos[0].recemNascidos;
    });
  }
  ngOnInit(): void {
    this.getPhoto();
  }
}
