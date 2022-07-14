import { Publisher, Heroe } from './../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
//propiedades

publishers = [

  {
    id:'DC Comics',
    desc:'DC - Comics'
  },
  {
    id:'Marvel Comics',
    desc:'Marvel - Comics'
  }
]

heroe:Heroe = {
  superhero:'',
  alter_ego:'',
  characters:'',
  first_appearance:'',
  publisher:Publisher.DCComics,
  alt_img:''
}

  constructor() { }

  ngOnInit(): void {
  }

}
