import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.scss']
})
export class ExamenesComponent implements OnInit {
  texto = 'Seleccione en el apartado izquierdo para ver en detalle los exámenes que se realizan en nuestro laboratorio. ';
  constructor() { }

  ngOnInit() {
  }

  getExamenes(){
    this.texto = 'Seleccione en el apartado izquierdo para ver en detalle los exámenes que se realizan en nuestro laboratorio. ';
  }
  getSerologico(){
    this.texto = 'En el ambito Serológico se realizan los siguientes examenes.';
  }
  getBioquimicos(){
    this.texto = 'En el ambito Bioquímico se realizan los siguientes examenes.';
  }
  getCultivos(){
    this.texto = 'En el ambito de los Cultivos se realizan los siguientes examenes.';
  }
  getDeposicion(){
    this.texto = 'En el ambito de Deposicion se realizan los siguientes examenes.';
  }
  getHematologicos(){
    this.texto = 'En el ambito Hematológico se realizan los siguientes examenes.';
  }
  getHormonas(){
    this.texto = 'En el ambito de Hormonas se realizan los siguientes examenes.';
  }
  getOrina(){
    this.texto = 'En el ambito de Orinas se realizan los siguientes examenes.';
  }

}
