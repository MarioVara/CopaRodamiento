import { Injectable } from '@angular/core';
import { Circuito, Clasificacion, ClasificacionEquipos, ClasificacionPiloto, Equipo, Piloto, Puntos, Registro, Temporada } from '../Data/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class crudService {

  url:string = 'http://localhost/coparodamiento/php/';

  constructor(private http: HttpClient) {
    

   }
    
   //Resultados

  addResultado(filas:Registro[]){
    console.log(filas);
  }
  getResultado(circuitoId:number, temporada:number){
    return this.http.get<Clasificacion[]>(`${this.url}clasificacion_carrera.php/getResultado/${circuitoId}/${temporada}`)  
  }
  getResultadoEquipo(temporada:number){
    return this.http.get<ClasificacionEquipos[]>(`${this.url}clasifica_equipos.php/getResultado/${temporada}`)
  }
  getResultadoPiloto(temporada:number){
    return this.http.get<ClasificacionPiloto[]>(`${this.url}clasifica_pilotos.php/getResultado/${temporada}`)
  }
  
  //Pilotos

  guardarPiloto(nombre:string, nickname:string){
    const body = {nombre, nickname}
    this.http.post(`${this.url}pilotos.php/guardarPiloto`, body).subscribe();
    
  }

  guardarPilotoEquipo(nombre:string, nickname:string, equipo:number, temporada:number){
    const body = {nombre, nickname, equipo, temporada}
    this.http.post(`${this.url}pilotos.php/guardarPilotoEquipo`, body).subscribe();
    
  }

  getPilotos(){
    const pilotos = this.http.get<Piloto[]>(`${this.url}pilotos.php/getPilotos`,);
    console.log(pilotos)
    return pilotos;
  }

  getPiloto(pilotoId:number){
    console.log(pilotoId)
    return this.http.get<Piloto>(`${this.url}pilotos.php/getPiloto/${pilotoId}`);
  }
  
  editarPiloto(pilotoId:number, nombre:string, nickname:string){
    console.log(pilotoId, nombre, nickname);
  }

  //Equipos
  getEquipos(){
    return this.http.get<Equipo[]>(`${this.url}equipos.php/getEquipos`)
  }
  getEquipo(equipoId:number){
    return this.http.get<Equipo>(`${this.url}equipos.php/getEquipo/${equipoId}`);
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
  getTemporadas(){
    return this.http.get<Temporada[]>(`${this.url}temporadas.php/getTemporadas`);
  }
  guardarTemporada(idTemp:number){
    console.log(idTemp);
  }


  //Circuitos
  getCircuitos(){
    return this.http.get<Circuito[]>(`${this.url}circuitos.php/getCircuitos`);
  }
  getCircuito(circuitoId:number){
    return this.http.get<Circuito>(`${this.url}circuitos.php/getCircuito/${circuitoId}`);
  }
  editarCircuito(circuitoId:number, circuito:string, pais:string){
    console.log(circuitoId, circuito, pais);
  }
  addCircuito(circuito:string, pais:string){
    const body= {circuito, pais}
    this.http.post(`${this.url}circuitos.php/addCircuito`, body).subscribe();

  }

  //Puntuación
  getPuntuacionCarrera(){
    return this.http.get<Puntos[]>(`${this.url}puntos.php/getPuntos`);
  }
  getPuntuacionSprint(){
    return this.http.get<Puntos[]>(`${this.url}puntos.php/getPuntosSprint`);
  }
  guardarPuntosCarrera(puntosCarrera:Puntos[]){
    console.log(puntosCarrera);
  }
  guardarPuntosSprint(puntosCarrera:Puntos[]){
    console.log(puntosCarrera);
  }
}
