import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SelectService } from '../../../Services/select.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Circuito, Clasificacion, Piloto, Puntos, Registro, Temporada } from '../../../Data/model';
import { ListadosService } from '../../../Services/crud.service';
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
  piloto:Piloto | undefined;

  circuitos:Circuito[] = [];
  circuito:string = '';

  temporada:number = 0;
  temporadas:Temporada[] = [];

  filas:Registro[] = [];
  fila:Registro | undefined;

  form: FormGroup;

  puntosSprint!:Puntos[];
  sprint!:boolean;
  puntos!:Puntos[];
  pole:boolean = false;
  vueltaRapida:boolean = false;
  clasificaciones:Clasificacion[] = [];
  
  sancion:number = 0;
  
  constructor (private select:SelectService,private crud:ListadosService, private fb:FormBuilder){ 
    this.form = this.fb.group({
      filas: this.fb.array([])
    });
  }
  
  ngOnInit() {
  
  this.getPilotos();
  this.getCircuitos();
  this.getTemporadas();
  this.getPuntos();
  this.getPuntosSprint();
  this.initClasificaciones();
  this.rellenarRegistro();
  
  }
    rellenarRegistro(){
      for(let i = 0; i<20; i++){
        this.filas.push({
          posicion: i+1,
          puntosSprint: this.puntosSprint[i].puntos,
          puntos: this.puntos[i].puntos,
          piloto: this.pilotoId,
          pole: false,
          vueltaRapida: false,
          sancion:0
        });
        (this.form.get('filas') as FormArray).push(this.fb.group({
          posicion: i + 1,
          puntosSprint: this.puntosSprint[i].puntos,
          puntos: this.puntos[i].puntos,
          piloto: [''],
          pole: [false],
          vueltaRapida: [false],
          sancion: [0]
        }));
  
      }
    }
    getPilotos(){
      this.pilotos = this.select.getPilotos();
    }
    initClasificaciones() {
      this.filas.forEach(() => {
        this.clasificaciones.push(new Clasificacion('', 0, 0, false, false, 0, 0));
      });
    }
    getTemporadas(){
      this.temporadas = this.select.getTemporadas();
    }
    getCircuitos(){
      this.circuitos = this.select.getCircuitos();
    }
    getPuntos(){
      this.puntos = this.crud.getPuntuacionCarrera();
    }
    getPuntosSprint(){
      this.puntosSprint = this.crud.getPuntuacionSprint();
    }
    onSubmit(filas:Registro[]){
      if(this.temporada==0 || this.circuito=='' || this.sprint==undefined ){
        Swal.fire({
          title: "Algo va mal",
          text: "Introduce Temporada, Circuito y Sprint",
          icon: "error"
        });  
        }
  
        else {this.crud.addResultado(this.filas);
        Swal.fire({
          title: "Perfect",
          text: "Registro añadido",
          icon: "info"
        });
        this.rellenarRegistro()}
    }
  }
  
  
  

