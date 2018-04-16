import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import * from "../../../assets/charjustify/jquery.charjustify.js";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styles: []
})
export class CommunityComponent implements OnInit, AfterViewInit {

    // titulo: any = document.getElementsByClassName('charjustify');

    @ViewChild('charjustify') t1;

  constructor() { }

  ngOnInit() {
      // this.titulo.characterJustify();
  }

  ngAfterViewInit(){
      this.t1.nativeElement.characterJustify();
  }

}
