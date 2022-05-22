import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.scss'],
})
export class MemoriaComponent implements OnInit {

  Selected = 4

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }

  backHome() {
    this.navCtrl.navigateForward('/home');
  }

  jogarMemoria() {
    this.navCtrl.navigateForward('/memoriaGame?dificuldade=' + this.Selected);
  }

  selectionEasy() {
    this.Selected = 4
    console.log(this.Selected)
  }


  selectionMedium() {
    this.Selected = 6
    console.log(this.Selected)
  }

  selectionHard() {
    this.Selected = 8
    console.log(this.Selected)
  }
}
