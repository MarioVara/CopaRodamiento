import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadosService } from '../../Services/crud.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  temporadas:string[] = this.listados.temporadas;
  circuitos:string[] = this.listados.temporadas;


  constructor(private listados:ListadosService){
  }


}
