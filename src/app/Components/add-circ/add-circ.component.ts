import { Component, OnInit } from '@angular/core';
import { crudService } from '../../Services/crud.service';
import Swal from 'sweetalert2';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-circ',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-circ.component.html',
  styleUrl: './add-circ.component.css'
})
export class AddCircComponent implements OnInit{

  nombreCircuito:string = '';
  pais:string = '';
  
  constructor(private crud:crudService){}
    ngOnInit(): void {
      
    }
  
    onSubmit(){
      if(this.nombreCircuito=='' || this.pais=='' ){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce el nombre y el pais",
        icon: "error"
      });  
      }

      else {
        console.log(this.nombreCircuito, this.pais)
        this.crud.addCircuito(this.nombreCircuito, this.pais);
        Swal.fire({
          title: "Perfect",
          text: "Circuito guardado",
          icon: "info"
      });}
      this.nombreCircuito = '';
      this.pais = '';
    }
  }
  