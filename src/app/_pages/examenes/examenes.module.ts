import { ExamenesRoutingModule } from 'app/_pages/examenes/examenes-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExamenesComponent } from "app/_pages/examenes/examenes.component";
import { NavbarModule } from "app/_pages/navbar/navbar.module";


@NgModule({
  imports: [
    CommonModule,
    ExamenesRoutingModule,
    NavbarModule
  ],
  declarations: [
    ExamenesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExamenesModule { }