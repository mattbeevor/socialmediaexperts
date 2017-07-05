import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { ButtonComponent } from './button.component';
import { SplashComponent } from './splash.component';
import { Box } from './box.component';


export const firebaseConfig = {
    apiKey: "AIzaSyD98sGf1wkBRctaCA2RMEyeJHp-4ZFRBe4",
    authDomain: "social-contact-form.firebaseapp.com",
    databaseURL: "https://social-contact-form.firebaseio.com",
    projectId: "social-contact-form",
    storageBucket: "social-contact-form.appspot.com",
    messagingSenderId: "806778232686"
};



const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'splash',
    component: SplashComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home',
    pathMatch: 'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ButtonComponent,
    SplashComponent,
    Box
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
