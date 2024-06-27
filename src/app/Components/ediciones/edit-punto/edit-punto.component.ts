import { Component, OnInit } from '@angular/core';
import { Puntos } from '../../../Data/model';
import { crudService } from '../../../Services/crud.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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

  editarCarrera(puntosCarrera:Puntos[]){
    this.crud.guardarPuntosCarrera(puntosCarrera)
  }

  editarSprint(puntosSprint:Puntos[]){
    this.crud.guardarPuntosSprint(puntosSprint);
  }

}
