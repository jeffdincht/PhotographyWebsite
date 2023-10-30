import { HygraphService } from './../../services/hygraph.service';
import {Component, inject, Input} from '@angular/core';
import { CMSPregnantImage,CMSImage, CMSPregnantResponse} from 'src/app/Models/images.models';
// import {ImageServiceService} from "../../services/image-service.service";


@Component({
  selector: 'app-pregnant',
  templateUrl: './pregnant.component.html',
  styleUrls: ['./pregnant.component.scss'],
})
export class PregnantComponent {
  images!: CMSImage[];
  constructor(private HygraphService:HygraphService) {
    this.HygraphService;
  }
  getPhoto(){
    const response = this.HygraphService.getPhotoPregnant()
    .subscribe((response: CMSPregnantResponse): void => {

      this.images = response.data.gravidas.map(gravida=>{
        return {
          url: gravida.gravidas.url,
          id: gravida.gravidas.id,
        }
      });
    });
  }
  
  ngOnInit(): void {
    this.getPhoto();
  }

}
