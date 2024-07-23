import { CommonModule, DOCUMENT, NgFor } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { crudService } from '../../Services/crud.service';
import { Circuito, Temporada } from '../../Data/model';
import Swal from 'sweetalert2';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { UserServiceService } from '../../Services/user-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, CommonModule, AuthModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  temporadas:Temporada[] = [];
  temporadaId:number =0;
  circuitos:Circuito[] =[];
  circuitoId:number=0;
  authy: boolean = false;
  roles$!: Observable<string[]>;
  rol!:string;



  constructor(private crud: crudService, private route:Router, @Inject(DOCUMENT) public document: Document, public auth: AuthService, private userService: UserServiceService){
  }
  ngOnInit(): void {
    this.userService.getUserRoles().subscribe(roles =>{
      for(let rol of roles){
        console.log('rol' + rol)
        if (rol == 'Admin'){
          this.rol = rol;
        }
        
        console.log( 'Official Rol' + this.rol);
      }
  });
    this.auth.isAuthenticated$.subscribe(isAuth =>{
      if(isAuth){
        this.authy = true;
      }
    })
    this.crud.getTemporadas().subscribe(result =>{
      this.temporadas = result
    });
    this.crud.getCircuitos().subscribe(result =>{
      this.circuitos = result
    })
  }
  verPiloto(idTemp:number){
    if(idTemp==0){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce una temporada",
        icon: "error"
      });  
      }
      else this.route.navigate([`/verPil/${idTemp}`]);
  }
  verEquipo(idTemp:number){
    if(idTemp==0){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce una temporada",
        icon: "error"
      });  
      }
      else this.route.navigate([`/verEqui/${idTemp}`]);
  }
  verCircuito(idTemp:number,idCir:number){
    if(idCir==0||idTemp==0){
      Swal.fire({
        title: "Algo va mal",
        text: "Introduce temporada y circuito",
        icon: "error"
      });  
      }
      else this.route.navigate([`/verCirc/${idTemp}/${idCir}`]);
  }
  administrar(){
    this.route.navigate([`/admin`]);
  }

}
