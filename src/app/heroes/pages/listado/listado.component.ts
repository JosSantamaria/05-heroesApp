import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [ `
      div mat-card{
        margin-bottom:15px;
      }

      mat-card{
          margin-top:20px;
          

      }
    `
  ]
})

export class ListadoComponent implements OnInit {

    termino: string = '';
    hayError:boolean = false;
    heroes:Heroe[] = [];

  constructor( private heroesService:HeroesService ) { }

  ngOnInit(): void {
          //.subscribe( resp => (console.log) ) Subcribirse al servicio y a la respuesta emplearle un console.log.
          // .subscribe( console.log ); //Equivalencia a la sentencia anterior.
    this.heroesService.getHeroes()  //llamado del servicio
    .subscribe({
       next:(heroe) =>
       {
        this.heroes = heroe;
       },
       error:(err) =>{
         this.hayError = true;
         this.heroes = [];
       }
    }); 
  }

}
