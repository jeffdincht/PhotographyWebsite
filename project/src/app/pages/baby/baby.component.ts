import { Component } from '@angular/core';
import { Image } from 'src/app/Models/images.models';
import {ImageServiceService} from "../../services/image-service.service";

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss'],
})
export class BabyComponent {
  images!: Image[];
  constructor(private imgService:ImageServiceService) {
    this.getImageFromService();
  }
  getImageFromService(){
    this.images = this.imgService.getBaby()
  }
}
