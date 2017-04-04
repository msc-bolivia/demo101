import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FoodPage } from '../food/food';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToFoodPage(){
    this.navCtrl.push( FoodPage );
  }

}
