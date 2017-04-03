import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Person } from '../../models/person.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  twitter: string = '@dkjsfhkadf';
  newName: string;
  names: string[] = ['camila', 'zulema', 'sandra', 'lina', 'monica', 'kattya'];

  constructor(public navCtrl: NavController) {
    let person1 = new Person('nicolas', 52);
    let name = person1.getName();
    console.log( name );
    console.log( person1.getAge() );

    let person2 = new Person('kattya');
    let name2 = person2.getName();
    console.log( name2 );
    console.log( person2.getAge() );

    let person3 = new Person('zulema', 22, true);
    console.log( person3.getIsSingle() );
    person3.setSingle( false );
    console.log( person3.getIsSingle() );
    let name3 = person3.getName();
    console.log( name3 );
    console.log( person3.getAge() );
  }


  updateTwitter( value ){
    this.twitter = value;
  }

  showAlert(){
    alert('Hola');
  }

  changeHtml( element: HTMLElement ){
    element.innerHTML = 'bla bla bla';
  }

  addName( name: string){
    this.names.unshift( name );
    this.newName = '';
  }

  removeName(){
    this.names.splice(0,1);
  }

}


