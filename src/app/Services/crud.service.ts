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

  addResultado(fila:Clasificacion){
    console.log(fila);
    const body:Clasificacion = fila;
    this.http.post(`${this.url}clasificacion_carrera.php/addResultado`, body).subscribe();
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
  deleteResultado(temporada:Temporada, circuito:Circuito){
    const body = {temporada, circuito};
    console.log(body);
    return this.http.post(`${this.url}clasificacion_carrera.php/deleteResultado`, body).subscribe();
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
    const body= {pilotoId, nombre, nickname}
    this.http.post(`${this.url}pilotos.php/editarPiloto`, body).subscribe();
  }

  //Equipos
  getEquipos(){
    return this.http.get<Equipo[]>(`${this.url}equipos.php/getEquipos`)
  }
  getEquipo(equipoId:number){
    return this.http.get<Equipo>(`${this.url}equipos.php/getEquipo/${equipoId}`);
  }
  getEquipamiento(piloto:number, temporada:number){
    return this.http.get<number>(`${this.url}equipos.php/getEquipamiento/${piloto}/${temporada}`)
  }
  guardarEquipo(nombreEquipo:string){
    const body = {nombreEquipo}
    this.http.post(`${this.url}equipos.php/addEquipo`, body).subscribe();
  }
  equipar(pilotoId:number, temporadaId:number, equipoId:number){
    //Añade uno nuevo
    console.log(pilotoId, temporadaId, equipoId);
    const body = {pilotoId, temporadaId, equipoId}
    this.http.post(`${this.url}equipos.php/equipar`, body).subscribe();
  }
  editarEquipo(pilotoId:number, temporadaId:number, equipoId:number){
    //Edita el que hay
    console.log(pilotoId, temporadaId, equipoId);
    const body = {pilotoId, temporadaId, equipoId}
    this.http.post(`${this.url}equipos.php/editEquipar`, body).subscribe();
  }

  //Temporadas
  getTemporadas(){
    return this.http.get<Temporada[]>(`${this.url}temporadas.php/getTemporadas`);
  }
  getTemporada(id:number){

    return this.http.get<Temporada>(`${this.url}temporadas.php/getTemporada/${id}`);
  }
  guardarTemporada(idTemp:number){
    const body = {idTemp}
    this.http.post(`${this.url}temporadas.php/addTemporada`, body).subscribe();
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
    const body= {circuitoId, circuito, pais}
    this.http.post(`${this.url}circuitos.php/editarCircuito`, body).subscribe();

  }
  addCircuito(circuito:string, pais:string){
    const body= {circuito, pais}
    this.http.post(`${this.url}circuitos.php/addCircuito`, body).subscribe();
  }

  //Puntuación
  getPuntuacionCarrera(){
    return this.http.get<Puntos[]>(`${this.url}puntos.php/getPuntos`);
  }
  guardarPuntos(puntosCarrera:Puntos[]){
    const body = puntosCarrera;
    this.http.post(`${this.url}puntos.php/editarPuntos`, body).subscribe();
  }
}
