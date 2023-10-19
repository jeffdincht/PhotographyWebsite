import {Component, Input} from '@angular/core';
import {Image} from "../../Models/images.models";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() images!: Image[];

}
