import { Injectable } from '@angular/core';
import { Circuito, Piloto, Temporada } from '../Data/model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  getPilotos(){
    let pilotos:Piloto[];
    pilotos = [{id:1, nombre: 'Mario', nickname: 'ElLombriz'}, {id: 2, nombre: 'Adrian',nickname: 'AdriOlmedo5'}, {id: 3, nombre: 'Chuchi', nickname:'Chuchillo'}]
    return pilotos;
  }
  getTemporadas(){
    let temporadas:Temporada[];
    temporadas = [{id:1},{id:2},{id:3}]
    return temporadas;
  }
  getCircuitos(){
    let circuitos:Circuito[];
    circuitos = [{id: 1, pais: 'Italia', circuito:'Monza'},{id:2, pais: 'Arabia', circuito: 'Bahreim'},{id: 3, pais: 'Monaco', circuito: 'Monaco'}]
    return circuitos;
  }
  getEquipos(){
    let equipos:string[];
    equipos = ['Aston Martin', 'Ferrari', 'Haas']
    return equipos;
  }
  getPuntos(){
    let puntos:number[];
    puntos=[25,18,15,12,10,8,6,4,2,1];
    return puntos;
  }
  getPuntosSprint(){
    let puntos:number[];
    puntos =[8,7,6,5,4,3,2,1];
    return puntos;
  }
}
