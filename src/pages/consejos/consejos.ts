import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-consejos',
  templateUrl: 'consejos.html',
})
export class ConsejosPage {

private _dataCards2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this._dataCards2 = [
    {title: "Consejo 1", video: "Tip1.mp4", descripcion: "Vida Activa",           portada: "portada1.png"  },
    {title: "Consejo 2", video: "Tip2.mp4", descripcion: "Cuida tu alimentación", portada: "portada2.png" },
    {title: "Consejo 3", video: "Tip3.mp4", descripcion: "Grasas saturadas",      portada: "portada3.png" },


   ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsejosPage');
  }

}
