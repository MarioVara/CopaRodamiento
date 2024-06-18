import { Component, OnInit } from '@angular/core';
import { ListadosService } from '../../../Services/crud.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Piloto } from '../../../Data/model';

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
  constructor(private crud:ListadosService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param => {this.pilotoId = param['idPil']});
    this.piloto = this.crud.getPiloto(this.pilotoId);
  }

  editarPiloto(nombre:string, nickname:string){
    this.crud.editarPiloto(this.pilotoId, nombre, nickname);
  }
}
