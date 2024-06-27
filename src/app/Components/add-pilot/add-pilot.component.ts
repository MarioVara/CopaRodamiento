import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { crudService } from '../../Services/crud.service';
import { Equipo, Temporada } from '../../Data/model';

@Component({
  selector: 'app-add-pilot',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-pilot.component.html',
  styleUrl: './add-pilot.component.css'
})
export class AddPilotComponent implements OnInit{

nombre:string = '';
nickname:string = '';
idEquipo:number = 0;
equipos:Equipo[]=[];
temporadas!:Temporada[];
temporadaId:number=0;

constructor(private crud:crudService){}
  ngOnInit(): void {
    this.crud.getEquipos().subscribe(result =>{this.equipos=result});
    this.crud.getTemporadas().subscribe(result =>{this.temporadas=result})
  }

  onSubmit(){
    if(this.nombre=='' || this.nickname==''){
    Swal.fire({
      title: "Algo va mal",
      text: "Introduce Nombre y Nickname",
      icon: "error"
    });  
    }
    else if(this.idEquipo == 0 && this.temporadaId==0){
      this.crud.guardarPiloto(this.nombre, this.nickname);
      Swal.fire({
        title: "Perfect",
        text: "Piloto y nick guardado",
        icon: "info"
      });
    }
    else if(this.idEquipo != 0 && this.temporadaId !=0){
      this.crud.guardarPilotoEquipo(this.nombre, this.nickname, this.idEquipo, this.idEquipo);
    Swal.fire({
      title: "Perfect",
      text: "Piloto, nick y equipo guardado",
      icon: "info"
    });}
    else {
      
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce todos los datos",
        icon: "error"
      });
    }
    this.nombre = '';
    this.nickname = '';
    this.idEquipo = 0;
    this.temporadaId =0;
  }
}
