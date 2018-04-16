import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styles: []
})
export class PrivacyComponent implements OnInit {

    fecha:any = new Date();
    nombreMes:string[] = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    mes:string = this.nombreMes[this.fecha.getUTCMonth()];
    anio:number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
