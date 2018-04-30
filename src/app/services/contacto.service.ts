import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Mensaje } from '../interfaces/mensaje.interface';
import 'rxjs/Rx';

@Injectable()
export class ContactoService {

    contactoURL:string = "https://nuclear-forms.firebaseio.com/admintragh.json";

  constructor( private http:Http ) { }

  nuevoMensaje(mensaje:Mensaje){
      let body = JSON.stringify(mensaje);
      let headers = new Headers({
          'Content-Type':'application/json'
      });
      return this.http.post(this.contactoURL, body, {headers}).map(res=>{
          console.log(res.json());
          return res.json();
      });
  }

}
