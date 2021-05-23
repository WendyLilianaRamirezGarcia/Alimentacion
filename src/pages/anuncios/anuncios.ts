import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-anuncios',
  templateUrl: 'anuncios.html',
})
export class AnunciosPage {

	private _dataCards3:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
   this._dataCards3 = [
    {title: "Anuncio 1", image: "Anuncio1.png",         },
    {title: "Anuncio 2", image: "Anuncio2.png",         },
    {title: "Anuncio 3", image: "Anuncio3.png",         },

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnunciosPage');
  }

}
