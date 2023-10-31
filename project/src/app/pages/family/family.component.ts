import { Component } from '@angular/core';
import {
  CMSFamilyResponse,
  CMSImage,
  Image,
} from 'src/app/Models/images.models';
import { HygraphService } from 'src/app/services/hygraph.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent {
  images!: CMSImage[];
  constructor(private HygraphService: HygraphService) {
    this.HygraphService;
  }
  getPhoto() {
    const response = this.HygraphService.getPhotoFamily().subscribe(
      (response: CMSFamilyResponse): void => {
        this.images = response.data.familias[0].familias;
      }
    );
  }
  ngOnInit(): void {
    this.getPhoto();
  }
}
