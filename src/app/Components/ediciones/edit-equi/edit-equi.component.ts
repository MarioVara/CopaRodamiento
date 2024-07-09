import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { crudService } from '../../../Services/crud.service';
import { Equipo, Piloto } from '../../../Data/model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-equi',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterOutlet],
  templateUrl: './edit-equi.component.html',
  styleUrl: './edit-equi.component.css'
})
export class EditEquiComponent implements OnInit {
  equipoId:number = 0;
  pilotoId:number = 0;
  temporadaId:number = 0;
  piloto!:Piloto;
  equipos:Equipo[] = [];
  equipo!:Equipo;
  anteriorEquipo:number = 0;
  nombreEquipo:string="";

  constructor(private crud:crudService, private route:ActivatedRoute){}
  

  ngOnInit(): void {
    this.route.params.subscribe(param => {this.pilotoId = param['idPil'], this.temporadaId = param['idTemp']});
    this.crud.getPiloto(this.pilotoId).subscribe(result => {this.piloto = result
      this.crud.getEquipamiento(this.pilotoId, this.temporadaId).subscribe(result =>{
        console.log(this.anteriorEquipo)
        if(result){
        this.anteriorEquipo=result
        console.log(this.equipo)
        this.crud.getEquipo(this.anteriorEquipo).subscribe(result=>{this.nombreEquipo = result.nombre});}
      });
    });
    this.crud.getEquipos().subscribe(result =>{this.equipos=result});
    
  }

  editarEquipo(equipoId:number){
    if(equipoId = 0){
      Swal.fire({
        title: "Algo va mal",
        text: "Elige un equipo",
        icon: "error"
      });  
      }
      else {
        this.crud.editarEquipo(this.pilotoId, this.temporadaId, equipoId);
        Swal.fire({
          title: "Perfect",
          text: "Equipado",
          icon: "info"
        });
      }
  }

  editarEquipoAniadir(equipoId:number){if(equipoId = 0){
    Swal.fire({
      title: "Algo va mal",
      text: "Elige un equipo",
      icon: "error"
    });  
    }
    else {
      this.crud.equipar(this.pilotoId, this.temporadaId, equipoId);
      Swal.fire({
        title: "Perfect",
        text: "Equipado",
        icon: "info"
      });
    }
  } 
}
  

