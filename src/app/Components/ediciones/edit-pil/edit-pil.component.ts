import { Component, OnInit } from '@angular/core';
import { crudService } from '../../../Services/crud.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Piloto } from '../../../Data/model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-pil',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterOutlet],
  templateUrl: './edit-pil.component.html',
  styleUrl: './edit-pil.component.css'
})
export class EditPilComponent implements OnInit{
  pilotoId:number = 0;
  piloto!:Piloto;
  constructor(private crud:crudService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param => {this.pilotoId = param['idPil']});
    this.crud.getPiloto(this.pilotoId).subscribe(result => {this.piloto = result});
  }

  editarPiloto(nombre:string, nickname:string){
    
    if(nombre==''||nickname==''){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce todos los datos",
        icon: "error"
      });  
      }
    else {
      this.crud.editarPiloto(this.pilotoId, nombre, nickname);
      Swal.fire({
        title: "Perfect",
        text: "Piloto Editado",
        icon: "info"
      });
    }
  }
}
