import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  backHome() {
    this.navCtrl.navigateForward('/home');
  }

}
