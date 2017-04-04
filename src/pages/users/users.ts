import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FoodPage } from '../food/food';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  names: string[] = ['camila', 'zulema', 'sandra', 'lina', 'monica', 'kattya'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToFoodPage(){
    this.navCtrl.push( FoodPage );
  }

  clickItem(name: string){
    alert('hola ' + name);
  }

}
