import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { crudService } from '../../Services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-temp',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-temp.component.html',
  styleUrl: './add-temp.component.css'
})
export class AddTempComponent implements OnInit{
  idTemp:number = 0;
  
  
  constructor(private crud:crudService){}
    ngOnInit(): void {
      
    }
  
    onSubmit(){
      if(this.idTemp==0){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce una Temporada",
        icon: "error"
      });  
      }
      else {
        console.log(this.idTemp)
        this.crud.guardarTemporada(this.idTemp);
      Swal.fire({
        title: "Perfect",
        text: "Agregada una temporada",
        icon: "info"
      });}
      this.idTemp = 0;
    }
  }
  