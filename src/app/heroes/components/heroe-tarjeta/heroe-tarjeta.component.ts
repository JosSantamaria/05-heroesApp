import { Component,Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})


export class HeroeTarjetaComponent  {

  //@Input() heroe!: Heroe | Undefined;

  //Recibimos por medio de un input los datos del observable del heroe.
  @Input() heroe!: Heroe;
  

}
