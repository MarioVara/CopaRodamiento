import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Equipo, Piloto, Temporada } from '../../Data/model';
import { crudService } from '../../Services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './equipar.component.html',
  styleUrl: './equipar.component.css'
})
export class EquiparComponent implements OnInit{
  pilotoId:number = 0;
  equipoId:number = 0;
  temporadaId:number = 0;
  piloto!:Piloto;

  equipos:Equipo[]=[];
  pilotos:Piloto[]=[];
  temporadas:Temporada[]=[];

  constructor(private crud:crudService){}
    ngOnInit(): void {
      this.crud.getEquipos().subscribe(result =>{this.equipos=result});
      this.crud.getPilotos().subscribe(result => {this.pilotos = result});
      this.crud.getTemporadas().subscribe(result =>{this.temporadas = result});
    }
  
    onSubmit(){
      if(this.pilotoId== 0 || this.temporadaId == 0|| this.equipoId == 0 ){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce Nombre y Nickname",
        icon: "error"
      });  
      }
      else {this.crud.equipar(this.pilotoId, this.temporadaId, this.equipoId);
      Swal.fire({
        title: "Perfect",
        text: "Piloto equipado",
        icon: "info"
      });}
      this.pilotoId = 0;
      this.equipoId = 0;
      this.temporadaId = 0;
    }
  }
  