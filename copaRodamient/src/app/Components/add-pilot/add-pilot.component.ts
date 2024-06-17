import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { ListadosService } from '../../Services/crud.service';

@Component({
  selector: 'app-add-pilot',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-pilot.component.html',
  styleUrl: './add-pilot.component.css'
})
export class AddPilotComponent {

nombre:string = '';
nickname:string = '';
equipo:string = '';

constructor(private crud:ListadosService){}

  onSubmit(){
    if(this.nombre=='' || this.nickname=='' ){
    Swal.fire({
      title: "Algo va mal",
      text: "Introduce Nombre y Nickname",
      icon: "error"
    });  
    }
    else if(this.equipo == ''){
      this.crud.guardarPiloto(this.nombre, this.equipo);
    }
    else this.crud.guardarPilotoEquipo(this.nombre, this.nickname, this.equipo);
  }
}
