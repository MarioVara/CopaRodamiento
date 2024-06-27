import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { crudService } from '../../Services/crud.service';
import { Circuito, Equipo, Piloto, Temporada } from '../../Data/model';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
circuitos:Circuito[] =[];
pilotos:Piloto[] = [];
temporadas:Temporada[] = [];
equipos:Equipo[] = [];

idPilotoEquipo:number = 0;
idPiloto:number = 0;
idTemporada:number = 0;
idTemporadaRes:number = 0;
idCircuito:number = 0;
idCircuitoRes:number=0;
idEquipo:number = 0;

  constructor(private crud:crudService, private route:Router){}

  ngOnInit(): void {
    this.crud.getPilotos().subscribe(result => {this.pilotos = result});
    this.crud.getCircuitos().subscribe(result =>{this.circuitos = result});
    this.crud.getTemporadas().subscribe(result =>{this.temporadas = result});
    this.crud.getEquipos().subscribe(result =>{this.equipos=result});
  }
  editarPiloto(idPiloto:number){
    if(idPiloto==0){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce Piloto",
        icon: "error"
      });  
      }
      else this.route.navigate([`/editPil/${idPiloto}`]);
  }

  editarEquipo(idEquipo:number, idTemporada:number){
    if(idEquipo == 0 || idTemporada == 0 ){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce Equipo y Temporada",
        icon: "error"
      });  
      }
    else this.route.navigate([`/editEqui/${idEquipo}/${idTemporada}`]);
    
  }

  editarCircuito(idCircuito:number){
    if(idCircuito==0){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce Circuito",
        icon: "error"
      });  
      }
    else this.route.navigate([`/editCirc/${idCircuito}`]);
  }

  editarResultado(idTemporada:number, idCircuito:number){
    if(idTemporada==0 || idCircuito==0 ){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce Temporada y Circuito",
        icon: "error"
      });  
      }
    else this.route.navigate([`/editRes/${idCircuito}/${idTemporada}`]);
  }
}
