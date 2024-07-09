import { Component, OnInit } from '@angular/core';
import { Puntos } from '../../../Data/model';
import { crudService } from '../../../Services/crud.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-punto',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-punto.component.html',
  styleUrl: './edit-punto.component.css'
})
export class EditPuntoComponent implements OnInit{
  puntosCarrera!:Puntos[];
  puntosSprint!:Puntos[];

  constructor(private crud:crudService){}

  ngOnInit(): void {
    this.crud.getPuntuacionCarrera().subscribe(result=>{this.puntosCarrera = result});
  }

  editarPuntos(puntosCarrera:Puntos[]){
    Swal.fire({
      title: "Perfect",
      text: "Puntos Editados",
      icon: "info"
    });
    this.crud.guardarPuntos(puntosCarrera);
  }
}
