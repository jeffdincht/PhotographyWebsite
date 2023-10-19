import { Component } from '@angular/core';
import { Image } from 'src/app/Models/images.models';
import {ImageServiceService} from "../../services/image-service.service";

@Component({
  selector: 'app-newborn',
  templateUrl: './newborn.component.html',
  styleUrls: ['./newborn.component.scss']
})
export class NewbornComponent {
  images!: Image[];
  constructor(private imgService:ImageServiceService) {
    this.getImageFromService();
  }
  getImageFromService(){
    this.images = this.imgService.getNewBorn();
  }
}
