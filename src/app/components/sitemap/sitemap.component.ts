import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styles: []
})
export class SitemapComponent implements OnInit {

  constructor( public _is:InfoService ) { }

  ngOnInit() {
  }

}
