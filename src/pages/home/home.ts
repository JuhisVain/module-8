import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    activeMenu: string;

    public userProfile:any = null;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        console.log(user);
        this.userProfile = user;
      } else {
        console.log("There's no user here");
      }
    });
  }


}
