import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListadosService } from '../../Services/crud.service';
import { Circuito, Equipo, Piloto, Temporada } from '../../Data/model';
import { FormsModule } from '@angular/forms';

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

  constructor(private crud:ListadosService){}

  ngOnInit(): void {
    this.circuitos = this.crud.getCircuitos();
    this.pilotos = this.crud.getPilotos();
    this.temporadas = this.crud.getTemporadas();
    this.equipos = this.crud.getEquipos();
  }
  editarPiloto(idPiloto:number){
    console.log(idPiloto);
  }

  editarEquipo(idEquipo:number, idTemporada:number){
    console.log(idEquipo, idTemporada)
  }

  editarCircuito(idCircuito:number){
    console.log(idCircuito)
  }

  editarResultado(idTemporada:number, idCircuito:number){
    console.log(idTemporada, idCircuito)
  }
}
