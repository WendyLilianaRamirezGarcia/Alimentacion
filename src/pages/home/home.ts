import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailshomePage} from '../detailshome/detailshome';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	private _dataCards:any;
  private _detailshome: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._detailshome = DetailshomePage;

  	this._dataCards = [
    {title: "Receta 1", image: "crema de zanahoria.png",            descripcion: "No es comer menos, es comer mejor."},
    {title: "Receta 2", image: "Ensalada de Fresa y Aguacate.png",  descripcion: "No es comer menos, es comer mejor."},
    {title: "Receta 3", image: "Pure de coliflor.png",              descripcion: "No es comer menos, es comer mejor."},


  	];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  loadDetails(currentInfo){
    //alert (currentInfo.title);
    this.navCtrl.push(this._detailshome,{details: currentInfo});

  }

}
