import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  shoppings: any;

  constructor(public navCtrl: NavController) {
    this.shoppings = ['Chocolate','Cookies','Soda','Coffee','Tea','Sandwich','Apple','Banana'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
