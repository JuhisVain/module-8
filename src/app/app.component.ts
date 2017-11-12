import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
import { LoginPage } from '../pages/login/login';
import { InfoSlidesPage } from '../pages/info-slides/info-slides';

//pages that can be accessed throught side navigation
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';

//firebase
import firebase from 'firebase';

//credentials
import { firebaseConfig } from './credentials';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  menuPages: Array<{title: string, component: any}>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    firebase.initializeApp(firebaseConfig);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // pages array, add all pages for side navigation here
    this.menuPages = [
      { title: 'Home', component: HomePage},
      { title: 'Settings', component: SettingsPage}
    ];
   }
   
   //open page from side navigation
   openPage(page) {
    this.nav.push(page.component);
   }
}

