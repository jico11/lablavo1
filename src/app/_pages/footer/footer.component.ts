import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = -23.6525;
  lng: number = -70.39581;
  zoom: number = 18;

  constructor() { }

  ngOnInit() {
  }

}
