import { Component, HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import {Router} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  navclass="navbar  noshadow fixed-top navbar-toggleable-md navbar-inverse bg-faded";
  background="'rgba(255,0,0,0.5)'"

  constructor(@Inject(DOCUMENT) private document: Document, private _router: Router) {
  }

  routeCheck(){
      if(this._router.url==="/contact"){
          this.navclass="navbar  noshadow fixed-top navbar-toggleable-md navbar-light bg-faded";
      }else{
          this.navclass="navbar noshadow fixed-top navbar-toggleable-md navbar-inverse bg-faded";
      }
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
