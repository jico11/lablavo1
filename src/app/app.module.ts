import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "environments/environment.prod";
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { ServicesComponent } from './_pages/services/services.component';
import { AboutusComponent } from './_pages/aboutus/aboutus.component';
import { WorkteamComponent } from './_pages/workteam/workteam.component';
import { ConveniosComponent } from './_pages/convenios/convenios.component';
import { SerologicosComponent } from './_pages/examenes/serologicos/serologicos.component';
import { HematologicosComponent } from './_pages/examenes/hematologicos/hematologicos.component';
import { DeposicionComponent } from "app/_pages/examenes/deposicion/deposicion.component";
import { CultivosComponent } from "app/_pages/examenes/cultivos/cultivos.component";
import { OrinaComponent } from "app/_pages/examenes/orina/orina.component";
import { HormonasComponent } from "app/_pages/examenes/hormonas/hormonas.component";
import { BioquimicosComponent } from "app/_pages/examenes/bioquimicos/bioquimicos.component";
import { NavbarModule } from "app/_pages/navbar/navbar.module";
import { ExamenesModule } from "app/_pages/examenes/examenes.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutusComponent,
    WorkteamComponent,
    ConveniosComponent,
    SerologicosComponent,
    HematologicosComponent,
    OrinaComponent,
    CultivosComponent,
    DeposicionComponent,
    HormonasComponent,
    BioquimicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    NavbarModule,
    ExamenesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
