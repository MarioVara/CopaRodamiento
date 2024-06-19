import { Injectable } from '@angular/core';
import { Circuito, Equipo, Piloto, Puntos, Registro, Temporada } from '../Data/model';

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
   //Resultados

  addResultado(filas:Registro[]){
    console.log(filas);
  }
  // getResultado(circuitoId:number, temporada:number){
  //   const resultado:Registro[] = [
  //     {
  //         "posicion": 1,
  //         "puntosSprint": 8,
  //         "puntos": 25,
  //         "piloto": 1,
  //         "pole": false,
  //         "vueltaRapida": true,
  //         "sancion": 2
  //     },
  //     {
  //         "posicion": 2,
  //         "puntosSprint": 7,
  //         "puntos": 18,
  //         "piloto": 2,
  //         "pole": true,
  //         "vueltaRapida": false,
  //         "sancion": 3
  //     },
  //     {
  //         "posicion": 3,
  //         "puntosSprint": 6,
  //         "puntos": 15,
  //         "piloto": 3,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 4
  //     },
  //     {
  //         "posicion": 4,
  //         "puntosSprint": 5,
  //         "puntos": 12,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 5,
  //         "puntosSprint": 4,
  //         "puntos": 10,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 6,
  //         "puntosSprint": 3,
  //         "puntos": 8,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 7,
  //         "puntosSprint": 2,
  //         "puntos": 6,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 8,
  //         "puntosSprint": 1,
  //         "puntos": 4,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 9,
  //         "puntosSprint": 0,
  //         "puntos": 2,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 10,
  //         "puntosSprint": 0,
  //         "puntos": 1,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 11,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 12,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 13,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 14,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 15,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 16,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 17,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 18,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 19,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 20,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 1,
  //         "puntosSprint": 8,
  //         "puntos": 25,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 2,
  //         "puntosSprint": 7,
  //         "puntos": 18,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 3,
  //         "puntosSprint": 6,
  //         "puntos": 15,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 4,
  //         "puntosSprint": 5,
  //         "puntos": 12,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 5,
  //         "puntosSprint": 4,
  //         "puntos": 10,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 6,
  //         "puntosSprint": 3,
  //         "puntos": 8,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 7,
  //         "puntosSprint": 2,
  //         "puntos": 6,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 8,
  //         "puntosSprint": 1,
  //         "puntos": 4,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 9,
  //         "puntosSprint": 0,
  //         "puntos": 2,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 10,
  //         "puntosSprint": 0,
  //         "puntos": 1,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 11,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 12,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 13,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 14,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 15,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 16,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 17,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 18,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 19,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     },
  //     {
  //         "posicion": 20,
  //         "puntosSprint": 0,
  //         "puntos": 0,
  //         "piloto": 0,
  //         "pole": false,
  //         "vueltaRapida": false,
  //         "sancion": 0
  //     }
  // ]
  // return resultado;
  // }

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
