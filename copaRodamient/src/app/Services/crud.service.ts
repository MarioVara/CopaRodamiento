import { Injectable } from '@angular/core';

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
  guardarPilotoEquipo(nombre:string, nickname:string, equipo:string){
    console.log(nombre, nickname, equipo)

  }
   
}
