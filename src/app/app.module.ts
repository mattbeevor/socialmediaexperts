import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { ButtonComponent } from './button.component';
import { SplashComponent } from './splash.component';
import { Box } from './box.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
