import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.scss']
})
export class ExamenesComponent implements OnInit {
  texto = 'Seleccione en el apartado izquierdo para ver en detalle los exámenes que se realizan en nuestro laboratorio. ';
  private sub: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    //console.log(router.events.subscribe((url:any) => console.log(url))); 
    //router.events.subscribe((url) => console.log(url));
    this.sub = router.events.subscribe(url=> url);
    router.events.subscribe(url => {
      if(url instanceof NavigationEnd){
      console.log(url.urlAfterRedirects);
        if(url.urlAfterRedirects == "/examenes/bioquimicos"){
          this.getBioquimicos();
        }
        if(url.urlAfterRedirects == "/examenes/cultivos"){
          this.getCultivos();
        }
        if(url.urlAfterRedirects == "/examenes/deposicion"){
          this.getDeposicion();
        }
        if(url.urlAfterRedirects == "/examenes/hematologicos"){
          this.getHematologicos();
        }
        if(url.urlAfterRedirects == "/examenes/hormonas"){
          this.getHormonas();
        }
        if(url.urlAfterRedirects == "/examenes/orina"){
          this.getOrina();
        }
        if(url.urlAfterRedirects == "/examenes/serologicos"){
          this.getSerologico();
        }
      }
    });
    console.log(this.sub);
  }
  
  ngOnInit() {
    //this.sub = this.router.url..routerState.parent(this.route);
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
