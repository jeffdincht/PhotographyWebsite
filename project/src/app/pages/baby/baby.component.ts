import { Component } from '@angular/core';
import { CMSImage, CMSBabyResponse, Image } from 'src/app/Models/images.models';
import { HygraphService } from 'src/app/services/hygraph.service';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss'],
})
export class BabyComponent {
  images!: CMSImage[];
  constructor(private HygraphService: HygraphService) {
    this.HygraphService;
  }
  getPhoto() {
    const response = this.HygraphService.getPhotoBaby().subscribe(
      (response: CMSBabyResponse): void => {
        this.images = response.data.bebes[0].bebes;
      }
    );
  }
  ngOnInit(): void {
    this.getPhoto();
  }
}
