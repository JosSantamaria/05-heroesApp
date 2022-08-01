import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
  //pure: false
})
export class ImagenPipe implements PipeTransform {

  transform( heroe:Heroe ): string {
    console.log('Pipe imagen procesado');

    if (!heroe.id && !heroe.alt_img )
    //Añadimos excepcion en caso de no tener un heroe.id (Al editar por ejemplo)
    {
      return 'assets/no-image.png';
    }else if(heroe.alt_img)
    {
      return heroe.alt_img;
    }else{
      //template strong: recibimos el heroe.id
    return `assets/heroes/${heroe.id}.jpg`;
    }

  }

}
