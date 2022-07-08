import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }
  //variable con la ip del json-server
  private urlApp:string = 'http://localhost:3000/heroes';

  getHeroes():Observable<Heroe[]>{

    return this.http.get<Heroe[]>(`${this.urlApp}`) // aplicamos una peticion get a la (url) de esta clase
  
  }

  getHeroePorId(id:string):Observable<Heroe[]>{

    return this.http.get<Heroe[]>(`${this.urlApp}/${id}`) 
  
  }

  editHeroePorId(id:string):Observable<Heroe[]>{

    return this.http.get<Heroe[]>(`${this.urlApp}/editar/${id}`) 
  
  }
}