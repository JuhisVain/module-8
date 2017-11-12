import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InfoSlidesPage } from '../pages/info-slides/info-slides';
import { SettingsPage } from '../pages/settings/settings';
import { NewsPage } from '../pages/news/news';
import { MenuPage } from '../pages/menu/menu';
import { FeedbackPage } from '../pages/feedback/feedback';

import { FirebaseProvider } from '../providers/firebase/firebase';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    InfoSlidesPage,
    SettingsPage,
    NewsPage,
    MenuPage,
    FeedbackPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    InfoSlidesPage,
    SettingsPage,
    NewsPage,
    MenuPage,
    FeedbackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
