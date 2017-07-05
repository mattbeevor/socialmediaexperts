import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'splash-component',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  animations: [
    trigger('slideAnimation', [
        state('pos0', style({
            transform: 'translate(33.33%,0%)',
        })),
        state('pos1', style({
            transform: 'translate(41.66%,0%)',
        })),
        state('pos2', style({
            transform: 'translate(50%,0%)',
        })),
        state('pos3', style({
            transform: 'translate(58.33%,0%)',
        })),
        state('pos4', style({
            transform: 'translate(66.66%,0%)',
        })),
        state('pos5', style({
            transform: 'translate(75%,0%)',
        })),
        state('pos6', style({
            transform: 'translate(83.33%,0%)',
        })),
        state('pos7', style({
            transform: 'translate(91.66%,0%)',
        })),
        transition('pos0 <=> pos1', animate('700ms ease-in-out')),
        transition('pos1 <=> pos2', animate('700ms ease-in-out')),
        transition('pos2 <=> pos3', animate('700ms ease-in-out')),
        transition('pos3 <=> pos4', animate('700ms ease-in-out')),
        transition('pos4 <=> pos5', animate('700ms ease-in-out')),
        transition('pos5 <=> pos6', animate('700ms ease-in-out')),
        transition('pos6 <=> pos7', animate('700ms ease-in-out')),


        transition('pos7 <=> pos0', animate(700, keyframes([
            style({opacity: '1',transform: 'translate(91.66%,0%)', easing:'ease-in-out', offset: 0}),
            style({opacity: '1', transform: 'translate(100%,0%)', offset: 0.998}),
            style({opacity: '0', transform: 'translate(100%,0%)', offset: 0.999}),
            style({opacity: '0', transform: 'translate(33.33%,0%)',  offset: 1}), 
        ])))

    ]),
  ],
})


export class SplashComponent {
  title = 'splash';

  state1: string = 'pos0';
  state2: string = 'pos4';
  timer = Observable.timer(0,1300);
  subscription = this.timer.subscribe(t=>{if(t){this.slideAlongBoth()}});



  slideFunction(state){
        switch(state) {
        case "pos0":
            state="pos1"
            break;
        case "pos1":
            state="pos2"
            break;
        case "pos2":
            state="pos3"
            break;
        case "pos3":
            state="pos4"
            break;
        case "pos4":
            state="pos5"
            break;
        case "pos5":
            state="pos6"
            break;
        case "pos6":
            state="pos7"
            break
        case "pos7":
            state="pos0"
            break
        default:
            state="pos1"
    }
    return state
  }

  slideAlong1() {
    this.state1=this.slideFunction(this.state1)
  }

  slideAlong2() {
    this.state2=this.slideFunction(this.state2)
  }

  slideAlongBoth() {
    this.slideAlong1()
    this.slideAlong2()
  }


}
