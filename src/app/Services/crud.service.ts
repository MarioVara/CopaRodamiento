import { Injectable } from '@angular/core';
import { Circuito, Equipo, Piloto, Temporada } from '../Data/model';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {
  temporadas:string[] = [];
  circuitos:string[] = [];

  constructor() {
    
    this.circuitos = ["Imola", "Cataluña", "Bahrein"];
    this.temporadas = ["1","2","2024"];
   }
  añadirResultado(){
    console.log()
  }
  guardarPiloto(nombre:string, nickname:string){
    console.log(nombre, nickname)
  }
  guardarPilotoEquipo(nombre:string, nickname:string, idEquipo:number){
    console.log(nombre, nickname, idEquipo)
  }
  getEquipos(){
    const equipos:Equipo[] = [{id:1, nombre:"Ferrari"}, {id:2, nombre:"Aston Martin"}, {id:3, nombre:"Haas"}];
    return equipos;
  }
  guardarCircuito(nombreCircuito:string, pais:string){
    console.log(nombreCircuito, pais);
  }
  guardarTemporada(idTemp:number){
    console.log(idTemp);
  }
  guardarEquipo(nombreEquipo:string){
    console.log(nombreEquipo)
  }
  equipar(pilotoId:number, temporadaId:number, equipoId:number){
    console.log(pilotoId, temporadaId, equipoId)
  }
  getTemporadas(){
    const temporadas:Temporada[] = [{id:1}, {id:2}, {id:3}];
    return temporadas;
  }  
  getPilotos(){
    const pilotos:Piloto[] = [{id:1, nombre:"Mario", nickname:"MarioVara"}, {id:2, nombre:"Adrian Olmedo", nickname:"AdriOlmedo5"}, {id:3, nombre:"Chuchi", nickname:'Chuchicito'}];
    return pilotos;
  }
  getCircuitos(){
    const circuitos:Circuito[] = [{id:1, circuito:"Suzuka", pais: "Japón"}, {id:2, circuito:"Montmeló", pais: "España"}, {id:3, circuito:"Monaco", pais: "Monaco"}];
    return circuitos;
  }
}
