import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe!:Heroe; 

  constructor(
        private activatedRoute:ActivatedRoute //con esto leemos la ruta
    ) { }

  ngOnInit(): void {
    //acedemos a los parametros de la ruta activa indicada con routerlink
    this.activatedRoute.params
    .subscribe(/*Desestructurado de objeto */ ({ id }) => this.heroe = id );//nos subscribimos para estar atentos a cambios, ya que es un observable
  }
  
}
