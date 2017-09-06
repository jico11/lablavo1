import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NavbarComponent } from "app/_pages/navbar/navbar.component"
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
    this.sub = router.events.subscribe(url => url);
    router.events.subscribe(url => {
      if (url instanceof NavigationEnd) {
        //console.log(url.urlAfterRedirects);
        if (url.urlAfterRedirects == "/examenes/bioquimicos") {
          this.getBioquimicos();
        }
        if (url.urlAfterRedirects == "/examenes/cultivos") {
          this.getCultivos();
        }
        if (url.urlAfterRedirects == "/examenes/deposicion") {
          this.getDeposicion();
        }
        if (url.urlAfterRedirects == "/examenes/hematologicos") {
          this.getHematologicos();
        }
        if (url.urlAfterRedirects == "/examenes/hormonas") {
          this.getHormonas();
        }
        if (url.urlAfterRedirects == "/examenes/orina") {
          this.getOrina();
        }
        if (url.urlAfterRedirects == "/examenes/serologicos") {
          this.getSerologico();
        }
        if (url.urlAfterRedirects == "/examenes/ginecologicos") {
          this.getGinecologicos();
        }
      }
    });
    //console.log(this.sub);
  }

  ngOnInit() {
    //this.sub = this.router.url..routerState.parent(this.route);
  }

  getExamenes() {
    this.texto = 'Seleccione en el apartado izquierdo para ver en detalle los exámenes que se realizan en nuestro laboratorio. ';
  }
  getSerologico() {
    this.texto = 'En el ámbito Serológico se realizan los siguientes exámenes.';
  }
  getBioquimicos() {
    this.texto = 'En el ámbito Bioquímico se realizan los siguientes exámenes.';
  }
  getCultivos() {
    this.texto = 'En el ámbito de los Cultivos se realizan los siguientes exámenes.';
  }
  getDeposicion() {
    this.texto = 'En el ámbito de Deposición se realizan los siguientes exámenes.';
  }
  getHematologicos() {
    this.texto = 'En el ámbito Hematológico se realizan los siguientes exámenes.';
  }
  getHormonas() {
    this.texto = 'En el ámbito de Hormonas se realizan los siguientes exámenes.';
  }
  getOrina() {
    this.texto = 'En el ámbito de Orinas se realizan los siguientes exámenes.';
  }
  getGinecologicos() {
    this.texto = 'En el ámbito Ginecológico se realizan los siguientes exámenes con la matrona.';
  }

}
