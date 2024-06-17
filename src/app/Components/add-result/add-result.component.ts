import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SelectService } from '../../Services/select.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Circuito, Clasificacion, Piloto, Registro, Temporada } from '../../Data/model';


@Component({
  selector: 'app-add-result',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './add-result.component.html',
  styleUrl: './add-result.component.css'
})
export class AddResultComponent implements OnInit {
  pilotos:Piloto[] = [];
  circuitos:Circuito[] = [];
  temporadas:Temporada[] = [];
  filas:Registro[]=[];
  fila:Registro | undefined;
  form: FormGroup;
  piloto:Piloto | undefined;
  temporada:number=0;
  circuito:string='';
  sprint:boolean=true;
  puntos:number[] = [];
  pole:boolean = false;
  vueltaRapida:boolean = false;
  clasificaciones:Clasificacion[]=[];
  puntosSprint:number[] = [];
  sancion:number =0;
  pilotoId:number =0;

constructor (private select:SelectService, private fb:FormBuilder){ 
  this.form = this.fb.group({
    filas: this.fb.array([])
  });
}

ngOnInit() {
this.rellenarRegistro();
this.getPilotos();
this.getCircuitos();
this.getTemporadas();
this.getPuntos();
this.getPuntosSprint();
this.initClasificaciones();


}
  rellenarRegistro(){
    for(let i = 0; i<20; i++){
      this.filas.push({
        posicion: i+1,
        puntosSprint: this.puntosSprint[i],
        puntos: this.puntos[i],
        piloto: this.pilotoId,
        pole: false,
        vueltaRapida: false,
        sancion:0
      });
      (this.form.get('filas') as FormArray).push(this.fb.group({
        posicion: i + 1,
        puntosSprint: this.puntosSprint[i],
        puntos: this.puntos[i],
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
    this.puntos = this.select.getPuntos();
  }
  getPuntosSprint(){
    this.puntosSprint = this.select.getPuntosSprint();
  }
  onSubmit(){
    console.log(this.temporada, this.circuito, this.sprint)
    console.log(this.form.value)
  }
  //************NO FUNCIONA. Estaba intentando recoger los datos */
  // resultado(): void{
  //   console.log(this.temporada, this.circuito, this.sprint)
  //   for(let clasificacion of this.clasificaciones){
  //     if(this.piloto){
  //       console.log(this.piloto)
  //       console.log(clasificacion.posicion)
  //       console.log(clasificacion.vueltaRapida)
  //     }
  //   }
  // }
}
