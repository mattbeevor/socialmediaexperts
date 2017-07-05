import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'app';

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  submit="SUBMIT"
  submitbuttonstyle="btn btn-secondary"

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  Send(desc: Object) {
      this.items.push(desc);
  }




  model = {name:"",email:"",message:"" };

  onSubmit() {
    this.Send(this.model)
    this.model={email:"",name:"",message:""}
    this.submit="THANK YOU!"
    this.submitbuttonstyle="btn btn-success"
  }


}
