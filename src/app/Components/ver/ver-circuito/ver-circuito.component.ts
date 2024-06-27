import { Component, OnInit } from '@angular/core';
import { Circuito, Clasificacion } from '../../../Data/model';
import { crudService } from '../../../Services/crud.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ver-circuito',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ver-circuito.component.html',
  styleUrl: './ver-circuito.component.css'
})
export class VerCircuitoComponent  implements OnInit{
  resultado!:Clasificacion[];
  temporadaId:number = 0;
  circuitoId:number =0;
  info!:Clasificacion;

  
  constructor(private crud:crudService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param => {this.temporadaId = param['temp'], this.circuitoId =param['circ']});
    this.crud.getResultado(this.circuitoId,this.temporadaId).subscribe(result=> {
      this.resultado=result;
      this.info = this.resultado[0]
      console.log(this.resultado);
    })
  }

}
