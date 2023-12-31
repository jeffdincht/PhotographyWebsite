import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Image} from "../Models/images.models";

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() {
  }

  getGravidas(): Image[] {
    return [
      {
        image: 'assets/images/gravida/Beatriz_119.jpg',
      },
      {
        image: 'assets/images/gravida/Beatriz_31.jpg',
      },
      {
        image: 'assets/images/gravida/Beatriz_32.jpg',
      },
      {
        image: 'assets/images/gravida/Beatriz_67.jpg',
      },
      {
        image: 'assets/images/gravida/Beatriz_80.jpg',
      },
      {
        image: 'assets/images/gravida/Beatriz_96.jpg',
      },
      {
        image: 'assets/images/gravida/Beatriz_121.jpg',
      },
      {
        image: 'assets/images/gravida/Beatriz_142.jpg',
      },
      {
        image: 'assets/images/gravida/Beatriz_152.jpg',
      },
      {
        image: 'assets/images/gravida/Beatriz_154.jpg',
      },
      {
        image: 'assets/images/gravida/Cátia_15.jpg',
      },
      {
        image: 'assets/images/gravida/Cátia_26.jpg',
      },
      {
        image: 'assets/images/gravida/horizontal/Cátia_41.jpg',
      },
      {
        image: 'assets/images/gravida/horizontal/Cátia_56.jpg',
      },
      {
        image: 'assets/images/gravida/horizontal/Cátia_92.jpg',
      },
      {
        image: 'assets/images/gravida/horizontal/Cintia_19.jpg',
      },
      {
        image: 'assets/images/gravida/horizontal/Clara_11.jpg',
      },
      {
        image: 'assets/images/gravida/horizontal/Sessão_37.jpg',
      },

      {
        image: 'assets/images/gravida/Clara_14.jpg',
      },
      {
        image: 'assets/images/gravida/horizontal/Flávia_77.jpg',
      },
      {
        image: 'assets/images/gravida/Cátia_71.jpg',
      },

      {
        image: 'assets/images/gravida/Cintia_6.jpg',
      },
      {
        image: 'assets/images/gravida/Cintia_7.jpg',
      },

      {
        image: 'assets/images/gravida/Cintia_21.jpg',
      },
      {
        image: 'assets/images/gravida/Cintia_28.jpg',
      },
      {
        image: 'assets/images/gravida/Clara_2.jpg',
      },
      {
        image: 'assets/images/gravida/Clara_3.jpg',
      },
      {
        image: 'assets/images/gravida/Clara_9.jpg',
      },

      {
        image: 'assets/images/gravida/Daniela_5.jpg',
      },
      {
        image: 'assets/images/gravida/Daniela_6.jpg',
      },
      {
        image: 'assets/images/gravida/Daniela_12.jpg',
      },
      {
        image: 'assets/images/gravida/Daniela_13.jpg',
      },
      {
        image: 'assets/images/gravida/Flávia_58.jpg',
      },
      {
        image: 'assets/images/gravida/Flávia_58.jpg',
      },
      {
        image: 'assets/images/gravida/Flávia_59.jpg',
      },
      {
        image: 'assets/images/gravida/Flávia_70.jpg',
      },

      {
        image: 'assets/images/gravida/Sessão_23.jpg',
      },

      {
        image: 'assets/images/gravida/Sessão_48.jpg',
      },
      {
        image: 'assets/images/gravida/Sessão_49.jpg',
      },
      {
        image: 'assets/images/gravida/Sessão_50.jpg',
      },
    ];
  }

  getBaby(): Image[] {
    return [
      {
        image: 'assets/images/bebe/2meses_13.jpg',
      },
      {
        image: 'assets/images/bebe/2meses_7.jpg',
      },
      {
        image: 'assets/images/bebe/2meses_9.jpg',
      },
      {
        image: 'assets/images/bebe/3meses_11.jpg',
      },
      {
        image: 'assets/images/bebe/3meses_14.jpg',
      },
      {
        image: 'assets/images/bebe/5meses_1.jpg',
      },
      {
        image: 'assets/images/bebe/5meses_10.jpg',
      },
      {
        image: 'assets/images/bebe/5meses_12.jpg',
      },
      {
        image: 'assets/images/bebe/5meses_2.jpg',
      },
      {
        image: 'assets/images/bebe/5meses_27.jpg',
      },
      {
        image: 'assets/images/bebe/5meses_33.jpg',
      },
      {
        image: 'assets/images/bebe/5meses_8.jpg',
      },
      {
        image: 'assets/images/bebe/5meses_9.jpg',
      },
      {
        image: 'assets/images/bebe/6meses_20.jpg',
      },
      {
        image: 'assets/images/bebe/6meses_24.jpg',
      },
      {
        image: 'assets/images/bebe/6meses_38.jpg',
      },
      {
        image: 'assets/images/bebe/7meses_4.jpg',
      },
      {
        image: 'assets/images/bebe/7meses_5.jpg',
      },
      {
        image: 'assets/images/bebe/8meses_12.jpg',
      },
      {
        image: 'assets/images/bebe/8meses_23.jpg',
      },
      {
        image: 'assets/images/bebe/8meses_3.jpg',
      },
      {
        image: 'assets/images/bebe/8meses_33.jpg',
      },
      {
        image: 'assets/images/bebe/8meses_38.jpg',
      },
      {
        image: 'assets/images/bebe/8meses_7.jpg',
      },
    ];
  }

  getFamily(): Image[] {
    return [
      {
        image: 'assets/images/familia/6meses_43.jpg',
      },
      {
        image: 'assets/images/familia/6meses_47.jpg',
      },
      {
        image: 'assets/images/familia/6meses_49.jpg',
      },
    ];
  }

  getNewBorn(): Image[] {
    return [
      {
        image: 'assets/images/recem-nascido/Martim_4.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_8.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_13.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_19.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_20.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_21.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_23.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_29.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_32.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_33.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_42.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_43.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_44.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_45.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_47.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_49.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Martim_51.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Newborn_26.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Sara_12.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Sara_16.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Sara_21.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Sara_23.jpg',
      },
      {
        image: 'assets/images/recem-nascido/Sara_42.jpg',
      },
    ];
  }
}
