import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe:Heroe): string {

    //console.log(heroe);

    //template strong: recibimos el heroe.id
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
