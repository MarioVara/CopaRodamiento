 export class Clasificacion {
     piloto: Piloto;
     posicion: number;
     puntos: number;
     pole: boolean;
     vueltaRapida:boolean;
     puntosSprint:number;
     sancion:number;
     temporada:Temporada;
     circuito:Circuito;
  constructor(piloto: Piloto, posicion: number, puntos: number, pole: boolean, vueltaRapida: boolean, puntosSprint: number, sancion: number, temporada:Temporada, circuito:Circuito) {
     this.piloto = piloto;
     this.posicion = posicion;
     this.puntos = puntos;
     this.pole = pole;
     this.vueltaRapida = vueltaRapida;
     this.puntosSprint = puntosSprint;
     this.sancion = sancion;
     this.temporada = temporada;
     this.circuito = circuito;
   }
 }
export class Piloto {
    id:number;
    nombre:string;
    nickname:string;
  constructor(id: number, nombre: string, nickname: string) {
    this.id = id
    this.nombre = nombre
    this.nickname = nickname
  }    
}
export class Administradores{
    administrador:string;
    pass:string;
  constructor(administrador: string, pass: string) {
    this.administrador = administrador
    this.pass = pass
  }    
}
export class Circuito{
    id:number;
    circuito:string;
    pais:string
  constructor(id: number, circuito: string, pais: string) {
    this.id = id
    this.circuito = circuito
    this.pais = pais
  }    
}
export class Carrera{
    id:number;
    posicion:number;
    puntos:number;
    pole:boolean;
    vueltaRapida:boolean;
    sancion:number;
    sprint:number;
    puntosSprint:number;
    piloto:Piloto;
    carrera:Carrera;
    temporada:Temporada;
    equipo:Equipo;
  constructor(id: number, posicion: number, puntos: number, pole: boolean, vueltaRapida: boolean, 
    sancion: number, sprint: number, puntosSprint: number, piloto: Piloto, carrera: Carrera, temporada: Temporada, equipo: Equipo) {

    this.id = id
    this.posicion = posicion
    this.puntos = puntos
    this.pole = pole
    this.vueltaRapida = vueltaRapida
    this.sancion = sancion
    this.sprint = sprint
    this.puntosSprint = puntosSprint
    this.piloto = piloto
    this.carrera = carrera
    this.temporada = temporada
    this.equipo = equipo
  }    
}
export class ClasificacionPiloto{
    piloto:Piloto;
    temporada:Temporada;
    totalPuntos:number;
    totalRapidas:number;
    totalPoles:number;
  constructor(piloto: Piloto, temporada: Temporada, totalPuntos: number, totalRapidas: number, totalPoles: number) {
    this.piloto = piloto
    this.temporada = temporada
    this.totalPuntos = totalPuntos
    this.totalRapidas = totalRapidas
    this.totalPoles = totalPoles
  }    
}
export class ClasificacionEquipos{
    idClasificacion:number;
    equipo:Equipo;
    temporada:Temporada;
    totalPoles:number;
    totalRapidas:number;
    totalPuntos:number;
  constructor(idClasificacion: number, equipo: Equipo, temporada: Temporada, totalPoles: number, totalRapidas: number, totalPuntos: number) {
    this.idClasificacion = idClasificacion
    this.equipo = equipo
    this.temporada = temporada
    this.totalPoles = totalPoles
    this.totalRapidas = totalRapidas
    this.totalPuntos = totalPuntos
  }    
}
export class Equipo {
    id:number;
    nombre:string;
  constructor(id: number, nombre: string) {
    this.id = id
    this.nombre = nombre
  }    
}
export class Temporada{
    id:number;
    constructor(id:number){
        this.id = id;
    }
}
export class Puntos{
  posicion:number;
  puntos:number;
  constructor(posicion: number, puntos: number) {
    this.posicion = posicion
    this.puntos = puntos
  }  
}
export interface Registro{
    posicion:number;
    piloto: Piloto[];
    puntos: number;
    pole:boolean;
    vueltaRapida: boolean;
    puntosSprint: number;
    sancion: number; 
}