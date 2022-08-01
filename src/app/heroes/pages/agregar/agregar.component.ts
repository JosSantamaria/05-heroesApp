import { ConfirmarComponent } from './../../components/confirmar/confirmar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { Publisher, Heroe } from './../../interfaces/heroe.interface';
import { HeroesService } from './../../services/heroes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


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

//iconos - acciones
icon:string = '';
action:string = '';

//agregamos el servicio para insertar el heroe
  constructor(private heroesService:HeroesService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private snackBar: MatSnackBar,
              private dialog:MatDialog) { }

  ngOnInit(): void {

    //Buscamos 'editar' dentro de la url.
    if(!this.router.url.includes('editar')){
      this.icon='save'
      this.action = 'Guardar'
      return;
    }

    if (this.router.url.includes('editar')) {
      this.icon='edit'
      this.action = 'Actualizar'
    }

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroePorId(id))
      )
      .subscribe( heroe => this.heroe = heroe);

    }

  guardar(){

    if(this.heroe.superhero.trim().length === 0){
      console.log('Sin datos en formulario')
      return;
    }

    if (this.heroe.id) {
      //actualizar heroe
      this.heroesService.actualizarHeroe(this.heroe)
       .subscribe( heroe => this.mostrarSnackBar('Registro Actualizado') )
    }else{
      //Crear - Guardar Heroe
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {//navegamos al nuevo elemento
        this.router.navigate(['/heroes/editar',heroe.id]);
        this.mostrarSnackBar('Registro Creado');
      });
    }
  }

  borrar(){
    const dialog = this.dialog.open(ConfirmarComponent,{
      width: '250px',
      data:this.heroe //se puede usar ...spread para no modificar la data
    });

    dialog.afterClosed().subscribe(
      ( result) => { if( result ){ this.heroesService.borrarHeroe(this.heroe.id!).subscribe(resp => {this.router.navigate(['/heroes']); } ) }
      }
    )


  }

  mostrarSnackBar(mensaje : string) {
    this.snackBar.open(mensaje,'ok!',
    {
      duration:2500
    });
  }

}
