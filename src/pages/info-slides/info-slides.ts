import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage } from '../home/home'
/**
 * Generated class for the InfoSlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-slides',
  templateUrl: 'info-slides.html',
})
export class InfoSlidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var audio = new Audio('assets/audio/outstanding.mp3');
    audio.play();


  }
  gotItButton() {
    this.navCtrl.setRoot(HomePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoSlidesPage');
  }
  

}
