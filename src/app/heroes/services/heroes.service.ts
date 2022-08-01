import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }
  //variable con la ip del json-server
  //private urlApp:string = 'http://localhost:3000/heroes';
  //environment variable
  private baseUrl:string = environment.baseUrl

  getHeroes():Observable<Heroe[]>{

    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`); // aplicamos una peticion get a la (url) de esta clase

  }

  getHeroePorId(id:string):Observable<Heroe>{

    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`) ;

  }

  getSugerencias( termino:string ):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${ termino }&_limit=6`);
  }

  agregarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes/`,heroe);
  }

  actualizarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`,heroe);
  }

  borrarHeroe(id:string):Observable<any>{
    return this.http.delete<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
}
