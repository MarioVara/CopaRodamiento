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
  piloto!:Piloto;

  circuitos:Circuito[] = [];
  circuito!:Circuito;

  temporada!:Temporada;
  temporadas:Temporada[] = [];

  filas:Registro[] = [];
  registro!:Registro;

  form: FormGroup;

  sprint!:boolean;
  puntos!:Puntos[];
  pole:boolean = false;
  vueltaRapida:boolean = false;
  clasificaciones:Clasificacion[] = [];
  clasificacion!:Clasificacion;

  sancion:number = 0;
  

constructor (private select:SelectService, private crud:crudService, private fb:FormBuilder){ 
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
  isObject(value: any): boolean {
    this.piloto = value;
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  //Hay que mejorar esto mucho: Los registros vacíos no se envian a la BDD

  onSubmit(filas:Registro[], temporada:Temporada, circuito:Circuito){
    if(temporada == undefined || this.circuito.id == 0 || this.sprint == undefined ){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce Temporada, Circuito y Sprint",
        icon: "error"
      });  
      }

      else {
        filas.forEach(fila => {
          if(this.isObject(fila.piloto)){
            if(this.sprint){
              if(fila.vueltaRapida){ this.clasificacion= {id:0, piloto:this.piloto, posicion:fila.posicion, puntos:(Number(fila.puntos)+1), pole:fila.pole,
                vueltaRapida:fila.vueltaRapida, sprint:this.sprint, puntosSprint:fila.puntosSprint, sancion:fila.sancion, temporada:this.temporada, carrera:this.circuito
                }
              
              }
              else  this.clasificacion= {id:0, piloto:this.piloto, posicion:fila.posicion, puntos:fila.puntos, pole:fila.pole,
                vueltaRapida:fila.vueltaRapida, sprint:this.sprint, puntosSprint:fila.puntosSprint, sancion:fila.sancion, temporada:this.temporada, carrera:this.circuito
                }
            }
            else{
              if(fila.vueltaRapida){ this.clasificacion= {id:0, piloto:this.piloto, posicion:fila.posicion, puntos:(Number(fila.puntos)+1), pole:fila.pole,
                vueltaRapida:fila.vueltaRapida, sprint:this.sprint, puntosSprint:0, sancion:fila.sancion, temporada:this.temporada, carrera:this.circuito
                }
              
              }
              else  this.clasificacion= {id:0, piloto:this.piloto, posicion:fila.posicion, puntos:fila.puntos, pole:fila.pole,
                vueltaRapida:fila.vueltaRapida, sprint:this.sprint, puntosSprint:0, sancion:fila.sancion, temporada:this.temporada, carrera:this.circuito
                }
            }
            
            this.crud.addResultado(this.clasificacion);
          }
        });
        
        
      Swal.fire({
        title: "Perfect",
        text: "Registro añadido",
        icon: "info"
      });
      }
  }
}


