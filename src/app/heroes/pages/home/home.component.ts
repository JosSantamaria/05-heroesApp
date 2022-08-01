import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin:10px;
    }
  `
  ]
})
export class HomeComponent {
  constructor(private router:Router ) { }



  logOut(){
    this.router.navigate(['./auth'])
  }

}
