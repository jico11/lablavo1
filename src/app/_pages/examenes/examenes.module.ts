import { ExamenesRoutingModule } from 'app/_pages/examenes/examenes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExamenesComponent } from "app/_pages/examenes/examenes.component";


@NgModule({
  imports: [
    CommonModule,
    ExamenesRoutingModule
  ],
    declarations: [
     ExamenesComponent
    ],
})
export class ExamenesModule {}