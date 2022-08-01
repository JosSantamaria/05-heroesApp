import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  constructor( private router:Router,
              private authService:AuthService ) { }

  login()
  {
    /*Comprobaciones */
    //Ir al backend
    //tener usuario
    this.authService.login()
    .subscribe( resp => {
      console.log(resp)
    })

    //Hacer la navegacion
    // this.router.navigate(['./heroes']);

  }

}
