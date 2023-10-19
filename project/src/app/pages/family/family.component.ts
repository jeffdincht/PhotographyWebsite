import { Component } from '@angular/core';
import { Image } from 'src/app/Models/images.models';
import {ImageServiceService} from "../../services/image-service.service";

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent {
  images!: Image[];
  constructor(private imgService:ImageServiceService) {
    this.getImageFromService();
  }
  getImageFromService(){
    this.images = this.imgService.getFamily()
  }
}
