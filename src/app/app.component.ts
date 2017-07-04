import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navclass="navbar  noshadow fixed-top navbar-toggleable-md navbar-inverse bg-faded";
  background="'rgba(255,0,0,0.5)'"

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

 @HostListener("window:scroll", [])
 onscroll() {
    let number = this.document.body.scrollTop;
    if(number>10){
      this.navclass="navbar noshadow fixed-top navbar-toggleable-md navbar-inverse bg-faded";
    }else{
      this.navclass="navbar  noshadow fixed-top navbar-toggleable-md  navbar-inverse bg-faded";
    }
 }

}
