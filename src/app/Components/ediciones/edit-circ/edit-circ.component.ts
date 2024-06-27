import { Component, OnInit } from '@angular/core';
import { crudService } from '../../../Services/crud.service';
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
  circuito!:Circuito;
  pais:string = '';
  elCircuito!: Circuito;

  constructor(private crud:crudService, private route:ActivatedRoute ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.circuitoId = params['idCirc']);
    this.crud.getCircuito(this.circuitoId).subscribe(result =>{this.circuito = result});
    this.pais = this.elCircuito.pais;
  }
  
  editarCircuito(circuito:string, pais:string){
    this.crud.editarCircuito(this.circuitoId, circuito, pais);
  }
  
}
