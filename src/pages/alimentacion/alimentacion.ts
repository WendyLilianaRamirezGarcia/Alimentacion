import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ConsejosPage } from '../consejos/consejos';
import { AnunciosPage } from '../anuncios/anuncios';


@Component({
  templateUrl: 'alimentacion.html'
})
export class AlimentacionPage {

  homeRoot = HomePage;
  consejosRoot = ConsejosPage;
  anunciosRoot = AnunciosPage;


  constructor() {}

}
