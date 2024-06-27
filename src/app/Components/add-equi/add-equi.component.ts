import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { crudService } from '../../Services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-equi',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-equi.component.html',
  styleUrl: './add-equi.component.css'
})
export class AddEquiComponent implements OnInit{

  nombreEquipo:string = '';
 
  constructor(private crud:crudService){}
    ngOnInit(): void {
      
    }
  
    onSubmit(){
      if(this.nombreEquipo==''){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce Nombre y Nickname",
        icon: "error"
      });  
      }

      else {this.crud.guardarEquipo(this.nombreEquipo);
      Swal.fire({
        title: "Perfect",
        text: "Equipo guardado",
        icon: "info"
      });}
      this.nombreEquipo = '';

    }
  }
  