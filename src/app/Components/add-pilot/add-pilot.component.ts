import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { ListadosService } from '../../Services/crud.service';
import { Equipo } from '../../Data/model';

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

constructor(private crud:ListadosService){}
  ngOnInit(): void {
    this.equipos = this.crud.getEquipos()
  }

  onSubmit(){
    if(this.nombre=='' || this.nickname=='' ){
    Swal.fire({
      title: "Algo va mal",
      text: "Introduce Nombre y Nickname",
      icon: "error"
    });  
    }
    else if(this.idEquipo == 0){
      this.crud.guardarPiloto(this.nombre, this.nickname);
      Swal.fire({
        title: "Perfect",
        text: "Piloto y nick guardado",
        icon: "info"
      });
    }
    else {this.crud.guardarPilotoEquipo(this.nombre, this.nickname, this.idEquipo);
    Swal.fire({
      title: "Perfect",
      text: "Piloto, nick y equipo guardado",
      icon: "info"
    });}
    this.nombre = '';
    this.nickname = '';
    this.idEquipo = 0;
  }
}
