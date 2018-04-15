import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  constructor(public _is:InfoService) { }

  ngOnInit() {
  }

}
