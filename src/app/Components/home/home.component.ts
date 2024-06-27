import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { crudService } from '../../Services/crud.service';
import { Circuito, Temporada } from '../../Data/model';
import Swal from 'sweetalert2';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  temporadas:Temporada[] = [];
  temporadaId:number =0;
  circuitos:Circuito[] =[];
  circuitoId:number=0;


  constructor(private crud: crudService, private route:Router){
  }
  ngOnInit(): void {
    this.crud.getTemporadas().subscribe(result =>{
      this.temporadas = result
    });
    this.crud.getCircuitos().subscribe(result =>{
      this.circuitos = result
    })
  }
  verPiloto(idTemp:number){
    if(idTemp==0){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce una temporada",
        icon: "error"
      });  
      }
      else this.route.navigate([`/verPil/${idTemp}`]);
  }
  verEquipo(idTemp:number){
    if(idTemp==0){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce una temporada",
        icon: "error"
      });  
      }
      else this.route.navigate([`/verEqui/${idTemp}`]);
  }
  verCircuito(idTemp:number,idCir:number){
    if(idCir==0||idTemp==0){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce temporada y circuito",
        icon: "error"
      });  
      }
      else this.route.navigate([`/verCirc/${idTemp}/${idCir}`]);
  }

}
