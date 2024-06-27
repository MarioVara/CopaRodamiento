import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddResultComponent } from './Components/add-result/add-result.component';
import { AddPilotComponent } from './Components/add-pilot/add-pilot.component';
import { AddCircComponent } from './Components/add-circ/add-circ.component';
import { AddTempComponent } from './Components/add-temp/add-temp.component';
import { AddEquiComponent } from './Components/add-equi/add-equi.component';
import { EquiparComponent } from './Components/equipar/equipar.component';
import { EditCircComponent } from './Components/ediciones/edit-circ/edit-circ.component';
import { EditEquiComponent } from './Components/ediciones/edit-equi/edit-equi.component';
import { EditPilComponent } from './Components/ediciones/edit-pil/edit-pil.component';
import { EditResComponent } from './Components/ediciones/edit-res/edit-res.component';
import { EditPuntoComponent } from './Components/ediciones/edit-punto/edit-punto.component';
import { VerPilotosComponent } from './Components/ver/ver-pilotos/ver-pilotos.component';
import { VerEquiposComponent } from './Components/ver/ver-equipos/ver-equipos.component';
import { VerCircuitoComponent } from './Components/ver/ver-circuito/ver-circuito.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'admin', component:AdminComponent},
    {path: 'addRes', component:AddResultComponent},
    {path: 'addPil', component:AddPilotComponent},
    {path: 'addCirc', component:AddCircComponent},
    {path: 'addTemp', component:AddTempComponent},
    {path: 'addEqui', component:AddEquiComponent},
    {path: 'equipar', component:EquiparComponent},
    {path: 'editCirc/:idCirc', component:EditCircComponent},
    {path: 'editEqui/:idPil/:idTemp', component:EditEquiComponent},
    {path: 'editPil/:idPil', component:EditPilComponent},
    {path: 'editRes/:idCir/:idTemp', component:EditResComponent},
    {path: 'editPunt', component:EditPuntoComponent},
    {path: 'verPil/:temp', component:VerPilotosComponent},
    {path: 'verEqui/:temp', component:VerEquiposComponent},
    {path: 'verCirc/:temp/:circ', component:VerCircuitoComponent}

];
