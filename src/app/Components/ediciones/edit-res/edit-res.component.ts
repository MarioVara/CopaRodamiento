import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SelectService } from '../../../Services/select.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Circuito, Clasificacion, Piloto, Puntos, Registro, Temporada } from '../../../Data/model';
import { crudService } from '../../../Services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-res',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-res.component.html',
  styleUrl: './edit-res.component.css'
})
export class EditResComponent implements OnInit{
  pilotos:Piloto[] = [];
  pilotoId:number = 0;
  piloto!:Piloto;

  circuitos:Circuito[] = [];
  circuito!:Circuito;
  circuitoId:number =0;

  temporadaId:number = 0;
  temporada!:Temporada;

  filas:Registro[] = [];
  fila!:Registro;
  filasRellenas:Registro[] = [];
  form: FormGroup;

  puntosSprint!:Puntos[];
  sprint!:boolean;
  puntos!:Puntos[];
  pole:boolean = false;
  vueltaRapida:boolean = false;
  clasificaciones:Clasificacion[] = [];
  clasificacion!:Clasificacion;

  sancion:number = 0;
  
  constructor (private crud:crudService, private fb:FormBuilder, private route: ActivatedRoute){ 
    this.form = this.fb.group({
      filas: this.fb.array([])
    });
  }
  
  ngOnInit() {
  this.route.params.subscribe(param => {this.circuitoId = param['idCir'], this.temporadaId = param['idTemp']});

  this.getPilotos();
  this.getCircuito(this.circuitoId);
  this.getPuntos();
  this.initClasificaciones();
  this.rellenarFilas();
  this.getTemporada(this.temporadaId);

  
  }
  rellenarFilas(){
    if(!this.puntos){
    }
    else{
      for(var punto of this.puntos){
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
  }


getTemporada(temporadaId:number){
  this.crud.getTemporada(temporadaId).subscribe(result=>{
    console.log(result);
    this.temporada = result;
  })
}
  getPilotos(){
      this.crud.getPilotos().subscribe(result => {this.pilotos = result});
    }
    initClasificaciones() {
   this.crud.getResultado(this.circuitoId,this.temporadaId).subscribe(result => {
    this.clasificaciones = result;
    console.log(result);

   });
    }
    isObject(value: any): boolean {
      this.piloto = value;
      return typeof value === 'object' && value !== null && !Array.isArray(value);
    }
    getCircuito(circuitoId:number){
      this.crud.getCircuito(circuitoId).subscribe(result =>{this.circuito = result});

    }
    getPuntos(){
      this.crud.getPuntuacionCarrera().subscribe(result=>{this.puntos = result
        this.rellenarFilas();
      });
    }
    onSubmit(filas:Registro[], temporada:number, circuito:Circuito){
      if(temporada == undefined || this.circuito.id == 0 || this.sprint == undefined ){
        Swal.fire({
          title: "Algo va mal",
          text: "Introduce Temporada, Circuito y Sprint",
          icon: "error"
        });  
        }
  
        else {
          this.crud.deleteResultado(this.temporada, this.circuito);
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
  borrar(){Swal.fire({
    title: "¿Seguro que quieres borrar el resultado?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Si",
    denyButtonText: `No`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.crud.deleteResultado(this.temporada, this.circuito);
      Swal.fire("Borrado!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("No borrado", "", "info");
    }
  });
   
  }
  }
  
  
  

