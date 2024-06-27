import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SelectService } from '../../Services/select.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Circuito, Clasificacion, Piloto, Puntos, Registro, Temporada } from '../../Data/model';
import { crudService } from '../../Services/crud.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-result',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './add-result.component.html',
  styleUrl: './add-result.component.css'
})
export class AddResultComponent implements OnInit {
  pilotos:Piloto[] = [];
  pilotoId:number = 0;
  piloto:Piloto | undefined;

  circuitos:Circuito[] = [];
  circuito!:Circuito;

  temporada:number = 0;
  temporadas:Temporada[] = [];

  filas:Registro[] = [];
  fila!:Registro;

  form: FormGroup;

  sprint!:boolean;
  puntos!:Puntos[];
  pole:boolean = false;
  vueltaRapida:boolean = false;
  clasificaciones:Clasificacion[] = [];
  
  sancion:number = 0;
  

constructor (private select:SelectService,private crud:crudService, private fb:FormBuilder){ 
  this.form = this.fb.group({
    filas: this.fb.array([])
  });
}

ngOnInit() {

this.getPilotos();
this.getCircuitos();
this.getTemporadas();
this.getPuntos();
this.initClasificaciones();

}
  rellenarFilas(){
    for(const punto of this.puntos){
      this.filas.push({
        posicion: punto.posicion,
        puntosSprint: punto.puntos_sprint,
        puntos: punto.puntos,
        piloto: this.pilotos,
        pole: false,
        vueltaRapida: false,
        sancion:0
      });
    }
  }
  getPilotos(){
    this.crud.getPilotos().subscribe(result => {this.pilotos = result});
  }
  initClasificaciones() {
    this.filas.forEach(() => {
      this.clasificaciones.push(new Clasificacion(0,new Piloto(0, '',''), 0, 0, false, false, false, 0, 0, new Temporada(0), new Circuito(0, '', '')));
    });
  }
  getTemporadas(){
    this.crud.getTemporadas().subscribe(result =>{this.temporadas = result});
  }
  getCircuitos(){
    this.crud.getCircuitos().subscribe(result =>{this.circuitos = result});
  }
  getPuntos(){
    this.crud.getPuntuacionCarrera().subscribe(result=>{this.puntos = result
      this.rellenarFilas();
    });
  }


  //Hay que mejorar esto mucho: Los registros vacíos no se envian a la BDD

  onSubmit(filas:Registro[], temporada:number, circuito:Circuito){
    if(this.temporada==0 || this.circuito.id==0 || this.sprint==undefined ){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce Temporada, Circuito y Sprint",
        icon: "error"
      });  
      }

      else {this.crud.addResultado(filas);
      Swal.fire({
        title: "Perfect",
        text: "Registro añadido",
        icon: "info"
      });
      }
  }
}


