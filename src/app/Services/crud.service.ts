import { Injectable } from '@angular/core';
import { Circuito, Equipo, Piloto, Puntos, Temporada } from '../Data/model';

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

  }

  //Pilotos
  guardarPiloto(nombre:string, nickname:string){
    console.log(nombre, nickname);
  }
  guardarPilotoEquipo(nombre:string, nickname:string, idEquipo:number){
    console.log(nombre, nickname, idEquipo);
  }  
  getPilotos(){
    const pilotos:Piloto[] = [{id:1, nombre:"Mario", nickname:"MarioVara"}, {id:2, nombre:"Adrian Olmedo", nickname:"AdriOlmedo5"}, {id:3, nombre:"Chuchi", nickname:'Chuchicito'}];
    return pilotos;
  }
  getPiloto(pilotoId:number){
   let piloto:Piloto = this.getPilotos()[pilotoId-1];
    return piloto;
  }
  editarPiloto(pilotoId:number, nombre:string, nickname:string){
    console.log(pilotoId, nombre, nickname);
  }

  //Equipos
  getEquipos(){
    const equipos:Equipo[] = [{id:1, nombre:"Ferrari"}, {id:2, nombre:"Aston Martin"}, {id:3, nombre:"Haas"}];
    return equipos;
  }
  guardarEquipo(nombreEquipo:string){
    console.log(nombreEquipo);
  }
  equipar(pilotoId:number, temporadaId:number, equipoId:number){
    console.log(pilotoId, temporadaId, equipoId);
  }
  editarEquipo(pilotoId:number, temporadaId:number, equipoId:number){
    console.log(pilotoId, temporadaId, equipoId);
  }

  //Temporadas
  guardarTemporada(idTemp:number){
    console.log(idTemp);
  }
  getTemporadas(){
    const temporadas:Temporada[] = [{id:1}, {id:2}, {id:3}];
    return temporadas;
  }

  
  //Circuitos
  getCircuitos(){
    const circuitos:Circuito[] = [{id:1, circuito:"Suzuka", pais: "Japón"}, {id:2, circuito:"Montmeló", pais: "España"}, {id:3, circuito:"Monaco", pais: "Monaco"}];
    return circuitos;
  }
  getCircuito(circuitoId:number){
    const circuito:Circuito = this.getCircuitos()[circuitoId-1]
    return circuito;
  }
  editarCircuito(circuitoId:number, circuito:string, pais:string){
    console.log(circuitoId, circuito, pais);
  }
  guardarCircuito(nombreCircuito:string, pais:string){
    console.log(nombreCircuito, pais);
  }

  //Puntuación
  getPuntuacionCarrera(){
    const puntos:Puntos[] = [
      {posicion:1, puntos:25}, 
      {posicion:2, puntos:18},
      {posicion:3, puntos:15},
      {posicion:4, puntos:12},
      {posicion:5, puntos:10},
      {posicion:6, puntos:8},
      {posicion:7, puntos:6},
      {posicion:8, puntos:4},
      {posicion:9, puntos:2},
      {posicion:10, puntos:1},
      {posicion:11, puntos:0},
      {posicion:12, puntos:0},
      {posicion:13, puntos:0},
      {posicion:14, puntos:0},
      {posicion:15, puntos:0},
      {posicion:16, puntos:0},
      {posicion:17, puntos:0},
      {posicion:18, puntos:0},
      {posicion:19, puntos:0},
      {posicion:20, puntos:0}]
      return puntos;
  }
  getPuntuacionSprint(){
    const puntos:Puntos[] = [
      {posicion:1, puntos:8}, 
      {posicion:2, puntos:7},
      {posicion:3, puntos:6},
      {posicion:4, puntos:5},
      {posicion:5, puntos:4},
      {posicion:6, puntos:3},
      {posicion:7, puntos:2},
      {posicion:8, puntos:1},
      {posicion:9, puntos:0},
      {posicion:10, puntos:0},
      {posicion:11, puntos:0},
      {posicion:12, puntos:0},
      {posicion:13, puntos:0},
      {posicion:14, puntos:0},
      {posicion:15, puntos:0},
      {posicion:16, puntos:0},
      {posicion:17, puntos:0},
      {posicion:18, puntos:0},
      {posicion:19, puntos:0},
      {posicion:20, puntos:0}]
      return puntos;
  }
  guardarPuntosCarrera(puntosCarrera:Puntos[]){
    console.log(puntosCarrera);
  }
  guardarPuntosSprint(puntosCarrera:Puntos[]){
    console.log(puntosCarrera);
  }
}
