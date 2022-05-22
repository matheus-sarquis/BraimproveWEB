import { Component } from '@angular/core';
import { NavController, ViewWillLeave } from '@ionic/angular';
import { MemoriaComponent } from './../memoria/memoria.component';
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewWillLeave {

  ionViewWillLeave() {

  }

  constructor(public navCtrl: NavController) { }

  // example of adding a transition when a page/modal closes
  openMemoria() {
    this.navCtrl.navigateForward('/memoria');
  }
  
  openRanking() {
    this.navCtrl.navigateForward('/ranking');
  }

  openSudoku() {
    this.navCtrl.navigateForward('/sudoku');
  }

  openComoJogar() {
    this.navCtrl.navigateForward('/comojogar');
  }

  openSobre() {
    this.navCtrl.navigateForward('/sobre');
  }

  open() {
    var msg = 'Baixe o mais novo aplicativo de melhoria cerebral, Braimprove: '+ 'https://cutt.ly/mSUmBsT'
    console.log("4")
    let target = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    document.getElementById("whatsapp-share-btt").setAttribute('href', "https://api.whatsapp.com/send?text=" + msg)

    this.navCtrl.navigateForward('/home');
  }


  //  whats() {
  //   console.log("5")
  //   //conteúdo que será compartilhado: Título da página + URL
  //   var conteudo = encodeURIComponent(document.title + " " + window.location.href);
  //   //altera a URL do botão //https://cutt.ly/mSUmBsT
  
  //   document.getElementById("whatsapp-share-btt").setAttribute('href', "https://api.whatsapp.com/send?text=" + conteudo)
  //}
}

// document.addEventListener("DOMContentLoaded", function() {
//   //conteúdo que será compartilhado: Título da página + URL
//   var conteudo = encodeURIComponent(document.title + " " + window.location.href);
//   //altera a URL do botão
//   document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
// }, false);






