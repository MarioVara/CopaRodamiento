import { Component, OnInit } from '@angular/core';
import { Puntos } from '../../../Data/model';
import { ListadosService } from '../../../Services/crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-punto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-punto.component.html',
  styleUrl: './edit-punto.component.css'
})
export class EditPuntoComponent implements OnInit{
  puntosCarrera!:Puntos[];
  puntosSprint!:Puntos[];

  constructor(private crud:ListadosService){}

  ngOnInit(): void {
    this.puntosCarrera = this.crud.getPuntuacionCarrera();
    this.puntosSprint = this.crud.getPuntuacionSprint();
  }

  editarCarrera(puntosCarrera:Puntos[]){
    this.crud.guardarPuntosCarrera(puntosCarrera)
  }

  editarSprint(puntosSprint:Puntos[]){
    this.crud.guardarPuntosSprint(puntosSprint);
  }

}
