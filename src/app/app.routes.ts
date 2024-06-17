import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddResultComponent } from './Components/add-result/add-result.component';
import { AddPilotComponent } from './Components/add-pilot/add-pilot.component';
import { AddCircComponent } from './Components/add-circ/add-circ.component';
import { AddTempComponent } from './Components/add-temp/add-temp.component';
import { AddEquiComponent } from './Components/add-equi/add-equi.component';
import { EquiparComponent } from './Components/equipar/equipar.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'admin', component:AdminComponent},
    {path: 'addRes', component:AddResultComponent},
    {path: 'addPil', component:AddPilotComponent},
    {path: 'addCirc', component:AddCircComponent},
    {path: 'addTemp', component:AddTempComponent},
    {path: 'addEqui', component:AddEquiComponent},
    {path: 'equipar', component:EquiparComponent}
];
