import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

declare function loadImage(params1, params2, params3): any
@Component({
  selector: 'app-memoriaGame',
  templateUrl: './memoriaGame.component.html',
  styleUrls: ['./memoriaGame.component.css']
})
export class MemoriaGameComponent implements OnInit {

  constructor(public navCtrl: NavController, public Arouting: ActivatedRoute) {
    this.Dificuldade = Arouting.snapshot.queryParams['dificuldade']
    console.log(this.Dificuldade)
  }
  Dificuldade
  ngOnInit() {
  }
  start() {
    var y: number = + this.Dificuldade;
    loadImage(y, 1, '')
    colocaLoading()
    setTimeout(tiraLoading, 3000);
    setTimeout(mostraJogo, 3000);
    setTimeout(tiraBotao, 3000);
  }

  backHome() {
    this.navCtrl.navigateForward('/memoria');
  }
}

function tiraLoading() {
  document.getElementById('1').hidden = true
}

function colocaLoading() {
  document.getElementById('1').hidden = false
}

function mostraJogo() {
  document.getElementById('2').hidden = false
}

function tiraBotao() {
  document.getElementById('3').hidden = true
}