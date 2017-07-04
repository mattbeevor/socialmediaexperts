import { Component , HostListener, Inject, OnInit  } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {Box} from './box.component';
import {ButtonComponent} from './button.component';
import {SplashComponent} from './splash.component';




@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {

  dynamicBlack="rgba(0, 0, 0, 0)";
  dynamicOpacity=0
  dynamicWhite="rgba(255, 255, 255, 0)"

  title = 'home';
  Height=2000
  Width=screen.width

  bottomleft=500


  mainpointsXlist=[]
  mainpointsYlist=[]
  mainYtranslated=""
  mainPoints="0,0 "+(this.Width).toString()+",0 "+(this.Width).toString()+","+(this.bottomleft-this.Width/10).toString()+"  0,"+this.bottomleft.toString()

  ApointsXlist=[]
  ApointsYlist=[]
  AYtranslated=""
  Apoints=(this.Width-450).toString()+",95 "+(this.Width).toString()+",50 "+(this.Width).toString()+",150 "+(this.Width-450).toString()+",195"

  BpointsXlist=[]
  BpointsYlist=[]
  BYtranslated=""
  Bpoints="0,400 700,330 700,430  0,500"

  CpointsXlist=[]
  CpointsYlist=[]
  CYtranslated=""
  Cpoints="0,200 800,132.5 800,245  0,325"

  DpointsXlist=[]
  DpointsYlist=[]
  DYtranslated=""
  Dpoints=(this.Width-700).toString()+",245 "+(this.Width).toString()+",175 "+(this.Width).toString()+",250 "+(this.Width-700).toString()+",320"

    


  constructor(@Inject(DOCUMENT) private document: Document) {
  }



 @HostListener("window:scroll", [])
 onscroll() {
    let number = this.document.body.scrollTop;
    console.log(number)
    this.mainYtranslated=""
    this.mainpointsXlist=[0,this.Width,this.Width,0]
    this.mainpointsYlist=[0,0,this.bottomleft-this.Width/10,this.bottomleft]

    this.AYtranslated=""
    this.ApointsXlist=[this.Width-450,this.Width,this.Width,this.Width-450]
    this.ApointsYlist=[95,50,150,195]

    this.BYtranslated=""
    this.BpointsXlist=[0,700,700,0]
    this.BpointsYlist=[400,330,430,500]
    
    this.CYtranslated=""
    this.CpointsXlist=[0,800,800,0]
    this.CpointsYlist=[200,132.5,245,325]

    this.DYtranslated=""
    this.DpointsXlist=[this.Width-700,this.Width,this.Width,this.Width-700]
    this.DpointsYlist=[245,175,250,320]

    
    
    for(let i=0;i<4;i++){ 
      this.mainYtranslated +=(this.mainpointsXlist[i]).toString() + ","+parseInt(this.mainpointsYlist[i]+(number*-1)) +  " "
      this.AYtranslated += parseInt(this.ApointsXlist[i]+number*2) + ","+parseInt(this.ApointsYlist[i]+number*0.8) +  " "
      this.BYtranslated += (this.BpointsXlist[i]-(number*3)).toString() + ","+parseInt(this.BpointsYlist[i]+number*1.3) +  " "
      this.CYtranslated += (this.CpointsXlist[i]-(number*4)).toString() + ","+parseInt(this.CpointsYlist[i]+number*1.4) +  " "
      this.DYtranslated += (this.DpointsXlist[i]+(number*3)).toString() + ","+parseInt(this.DpointsYlist[i]+number*0.7) +  " "
    }
    
    
    this.Apoints=this.AYtranslated
    this.Bpoints=this.BYtranslated
    this.Cpoints=this.CYtranslated
    this.Dpoints=this.DYtranslated
    this.mainPoints=this.mainYtranslated

  
    if(number<400){
      this.dynamicOpacity=Math.min(number/100,1)
    }else{
       this.dynamicOpacity=Math.min((500-number)/100,1)
       console.log(this.dynamicOpacity)
    }



    this.dynamicBlack="rgba(0, 0, 0,"+(this.dynamicOpacity/2).toString()+")"
    this.dynamicWhite="rgba(255, 255, 255,"+this.dynamicOpacity.toString()+")"





 }

}
