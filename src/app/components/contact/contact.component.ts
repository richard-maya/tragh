import { Component } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {

    formulario:FormGroup;
    mensajeEnviado:boolean = false;
    fecha:any = new Date();

  constructor(public _is:InfoService, private _cs:ContactoService) {
      this.formulario = new FormGroup({
          'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(99)]),
          'telefono': new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(24)]),
          'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
          'mensaje': new FormControl('', [Validators.required, Validators.minLength(3)]),
          'fecha': new FormControl(this.fecha),
          'visto': new FormControl(false)
      })
  }

  enviarMensaje(){
      this._cs.nuevoMensaje(this.formulario.value).subscribe(data=>{});
      this.mensajeEnviado = true;
      this.formulario.reset();
  }

}
