import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddResultComponent } from './Components/add-result/add-result.component';
import { AddPilotComponent } from './Components/add-pilot/add-pilot.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'admin', component:AdminComponent},
    {path: 'addRes', component:AddResultComponent},
    {path: 'addPil', component:AddPilotComponent}
];
