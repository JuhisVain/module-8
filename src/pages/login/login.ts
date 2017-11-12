import { Component } from '@angular/core';
import {
  //default 
  NavController,
  NavParams,
  //additional
  Alert,
  AlertController,
  Loading,
  LoadingController
} from 'ionic-angular';

//for forms
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'


//tabs navigation for redirect
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

//import firebase provider class
import { FirebaseProvider } from '../../providers/firebase/firebase';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loginForm: FormGroup;
  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: FirebaseProvider,
    formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required])
      ],
      password: [
        '', Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });

  }

  goToSignup(): void {
    this.navCtrl.push('SignupPage');
  }

  signupWithGoogle() : void {
    this.authProvider.googleLogin().then(
      authData => {
        
          this.navCtrl.setRoot(HomePage);
      },
      error => {
          this.navCtrl.setRoot(SettingsPage)
          var audio = new Audio('assets/audio/denied.mp3');
          audio.play();
      }
    );
  }

  loginUser(): void {
    if (!this.loginForm.valid) {
      console.log(
        `Form is not valid yet, current value: ${this.loginForm.value}`
      );
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authProvider.loginUser(email, password).then(
        authData => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(HomePage);
          });
        },
        error => {
          this.loading.dismiss().then(() => {
            var audio = new Audio('assets/audio/denied.mp3');
            audio.play();
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            alert.present();
          });
        }
      );
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
}
