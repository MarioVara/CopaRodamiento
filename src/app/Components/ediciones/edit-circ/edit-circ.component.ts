import { Component, OnInit } from '@angular/core';
import { ListadosService } from '../../../Services/crud.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { Circuito } from '../../../Data/model';

@Component({
  selector: 'app-edit-circ',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterOutlet],
  templateUrl: './edit-circ.component.html',
  styleUrl: './edit-circ.component.css'
})
export class EditCircComponent implements OnInit{
  circuitoId:number = 0;
  circuito:string = '';
  pais:string = '';
  elCircuito!: Circuito;

  constructor(private crud:ListadosService, private route:ActivatedRoute ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.circuitoId = params['idCirc']);
    this.elCircuito = this.crud.getCircuito(this.circuitoId);
    this.circuito = this.elCircuito.circuito
    this.pais = this.elCircuito.pais;
  }
  
  editarCircuito(circuito:string, pais:string){
    this.crud.editarCircuito(this.circuitoId, circuito, pais);
  }
  
}
