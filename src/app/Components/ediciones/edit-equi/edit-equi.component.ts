import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { crudService } from '../../../Services/crud.service';
import { Equipo, Piloto } from '../../../Data/model';

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

  constructor(private crud:crudService, private route:ActivatedRoute){}
  

  ngOnInit(): void {
    this.route.params.subscribe(param => {this.pilotoId = param['idPil'], this.temporadaId = param['idTemp']});
    this.crud.getPiloto(this.pilotoId).subscribe(result => {this.piloto = result});
    this.crud.getEquipos().subscribe(result =>{this.equipos=result});
  }
  editarEquipo(equipoId:number){
    this.crud.editarEquipo(this.pilotoId, this.temporadaId, equipoId);
  }
}
