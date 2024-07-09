import { Component, OnInit } from '@angular/core';
import { crudService } from '../../../Services/crud.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { Circuito } from '../../../Data/model';
import Swal from 'sweetalert2';

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
  

  constructor(private crud:crudService, private route:ActivatedRoute ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.circuitoId = params['idCirc']);
    this.crud.getCircuito(this.circuitoId).subscribe(result =>{this.circuito = result});
  }
  
  editarCircuito(circuito:string, pais:string){
    if(circuito==''||pais==''){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce todos los datos",
        icon: "error"
      });  
      }
    else {
      this.crud.editarCircuito(this.circuitoId, circuito, pais);
      Swal.fire({
        title: "Perfect",
        text: "Circuito Editado",
        icon: "info"
      });
    }
  }
  
}
