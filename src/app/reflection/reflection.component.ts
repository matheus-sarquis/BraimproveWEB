import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.scss'],
})
export class ReflectionComponent implements OnInit {

  Selected = 1

  constructor(public navCtrl : NavController) { }

  ngOnInit() {}

  backHome(){
    this.navCtrl.navigateForward('/home');   
  }
  jogarReflection(){
      this.navCtrl.navigateForward('/reflectionGame');          
  }

  selectionEasy(){
    this.Selected = 1
    console.log(this.Selected)
  }


  selectionMedium(){
    this.Selected = 2
    console.log(this.Selected)
  }

  selectionHard(){
    this.Selected = 3
    console.log(this.Selected)
  }
}

