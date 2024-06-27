import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ClasificacionEquipos } from '../../../Data/model';
import { crudService } from '../../../Services/crud.service';

@Component({
  selector: 'app-ver-equipos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ver-equipos.component.html',
  styleUrl: './ver-equipos.component.css'
})
export class VerEquiposComponent implements OnInit{
  resultado!:ClasificacionEquipos[];
  temporadaId:number=0;
  
  constructor(private crud:crudService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param => {this.temporadaId = param['temp']});
    this.crud.getResultadoEquipo(this.temporadaId).subscribe(result =>{
      this.resultado = result;
      console.log(this.resultado)
    })
  }

}
