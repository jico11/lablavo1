import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/_pages/home/home.component";
import { ConveniosComponent } from "app/_pages/convenios/convenios.component";
import { AboutusComponent } from "app/_pages/aboutus/aboutus.component";
import { ExamenesRoutingModule } from "app/_pages/examenes/examenes-routing.module";
import { OtroservicioComponent } from "app/_pages/otroservicio/otroservicio.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'convenios', component: ConveniosComponent },
  {path: 'sobre-nosotros', component: AboutusComponent },
  {path: 'examenes', loadChildren: './_pages/examenes/examenes.module#ExamenesModule'},
  {path: 'examenes-a-domicilio', component: OtroservicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ExamenesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
