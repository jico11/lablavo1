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

  getSerologico(){
    this.texto = 'En el ambito serológico se realizan los siguientes examenes.';

  }

}
