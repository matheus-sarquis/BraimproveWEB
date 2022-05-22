import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-comojogar',
  templateUrl: './comojogar.component.html',
  styleUrls: ['./comojogar.component.css']
})
export class ComojogarComponent implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  backHome(){
    this.navCtrl.navigateForward('/home');    
  }

}
