import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamenesComponent } from "app/_pages/examenes/examenes.component";
import { SerologicosComponent } from "app/_pages/examenes/serologicos/serologicos.component";
import { HematologicosComponent } from "app/_pages/examenes/hematologicos/hematologicos.component";
import { CultivosComponent } from "app/_pages/examenes/cultivos/cultivos.component";
import { DeposicionComponent } from "app/_pages/examenes/deposicion/deposicion.component";
import { OrinaComponent } from "app/_pages/examenes/orina/orina.component";
import { BioquimicosComponent } from "app/_pages/examenes/bioquimicos/bioquimicos.component";
import { HormonasComponent } from "app/_pages/examenes/hormonas/hormonas.component";

const routes: Routes = [
  { path: 'examenes', 
    component: ExamenesComponent,
    children: [
      { path: 'cultivos', component: CultivosComponent },
      { path: 'deposicion', component: DeposicionComponent },
      { path: 'hematologicos', component: HematologicosComponent },
      { path: 'orina', component: OrinaComponent },
      { path: 'serologicos', component: SerologicosComponent },
      { path: 'bioquimicos', component: BioquimicosComponent },
      { path: 'hormonas', component: HormonasComponent }
    ]
  } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamenesRoutingModule { }