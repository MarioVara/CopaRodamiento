 export class Clasificacion {
     id:number;
     piloto: Piloto;
     posicion: number;
     puntos: number;
     pole: boolean;
     vueltaRapida:boolean;
     sprint:boolean;
     puntosSprint:number;
     sancion:number;
     temporada:Temporada;
     carrera:Circuito;
  constructor(id:number, piloto: Piloto, posicion: number, puntos: number, pole: boolean, vueltaRapida: boolean, sprint:boolean, puntosSprint: number, sancion: number, temporada:Temporada, carrera:Circuito) {
     this.id = id;
     this.piloto = piloto;
     this.posicion = posicion;
     this.puntos = puntos;
     this.pole = pole;
     this.vueltaRapida = vueltaRapida;
     this.sprint = sprint;
     this.puntosSprint = puntosSprint;
     this.sancion = sancion;
     this.temporada = temporada;
     this.carrera = carrera;
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
    total_puntos:number;
    total_rapidas:number;
    total_poles:number;
  constructor(piloto: Piloto, temporada: Temporada, total_puntos: number, total_rapidas: number, total_poles: number) {
    this.piloto = piloto
    this.temporada = temporada
    this.total_puntos = total_puntos
    this.total_rapidas = total_rapidas
    this.total_poles = total_poles
  }    
}
export class ClasificacionEquipos{
    idClasificacion:number;
    equipo:Equipo;
    temporada:Temporada;
    total_poles:number;
    vueltas_rapidas:number;
    puntos:number;
  constructor(idClasificacion: number, equipo: Equipo, temporada: Temporada, total_poles: number, vueltas_rapidas: number, puntos: number) {
    this.idClasificacion = idClasificacion
    this.equipo = equipo
    this.temporada = temporada
    this.total_poles = total_poles
    this.vueltas_rapidas = vueltas_rapidas
    this.puntos = puntos
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
  puntos_sprint:number;
  constructor(posicion: number, puntos: number, puntos_sprint:number) {
    this.posicion = posicion
    this.puntos = puntos
    this.puntos_sprint = puntos_sprint;
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
