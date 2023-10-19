import {Component, inject, Input} from '@angular/core';
import { Image } from 'src/app/Models/images.models';
import {ImageServiceService} from "../../services/image-service.service";

@Component({
  selector: 'app-pregnant',
  templateUrl: './pregnant.component.html',
  styleUrls: ['./pregnant.component.scss'],
})
export class PregnantComponent {
  images!: Image[];
  constructor(private imgService:ImageServiceService) {
    this.getImageFromService();
  }
  getImageFromService(){
    this.images = this.imgService.getGravidas()
  }
}
