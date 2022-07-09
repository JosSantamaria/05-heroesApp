import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [ ` img {
    width:100%;
    border-radius:10px;
  } 
  `]
})
export class HeroeComponent implements OnInit {
  heroe!:Heroe; 

  constructor(
        private activatedRoute:ActivatedRoute, //con esto leemos la ruta
        private heroeService:HeroesService,
        private router: Router
    ) { }

  ngOnInit(): void {
    //acedemos a los parametros de la ruta activa indicada con routerlink
    this.activatedRoute.params
    .pipe(     /*Desestructurado de objeto */
      switchMap( ({ id }) => this.heroeService.getHeroePorId(id) )
    )
    .subscribe( heroe => this.heroe = heroe );//nos subscribimos para estar atentos a cambios, ya que es un observable
  }

  /**Boton regresar */

  regresar(){
    this.router.navigate(['./heroes/listado']);
  }
  
}
