import { Component, OnInit } from '@angular/core';
import { crudService } from '../../../Services/crud.service';
import { Clasificacion, ClasificacionPiloto } from '../../../Data/model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ver-pilotos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ver-pilotos.component.html',
  styleUrl: './ver-pilotos.component.css'
})
export class VerPilotosComponent implements OnInit{
  resultado!:ClasificacionPiloto[];
  temporadaId:number = 0;
  constructor(private crud:crudService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param => {this.temporadaId = param['temp']});
    this.crud.getResultadoPiloto(this.temporadaId).subscribe(result=> {
      this.resultado = result;
      console.log(this.resultado);
    })
  }

}
