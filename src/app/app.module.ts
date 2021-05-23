import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AlimentacionPage} from '../pages/alimentacion/alimentacion';
import {ConsejosPage} from '../pages/consejos/consejos';
import {AnunciosPage} from '../pages/anuncios/anuncios';

import {DetailshomePage} from '../pages/detailshome/detailshome';


@NgModule({
  declarations: [
    MyApp,
    HomePage,

    AlimentacionPage,
    ConsejosPage,
    AnunciosPage,

    DetailshomePage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    AlimentacionPage,
    ConsejosPage,
    AnunciosPage,
    DetailshomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
