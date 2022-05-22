import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss'],
})
export class SudokuComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  Selected = 1

  ngOnInit() { }

  backHome() {
    this.navCtrl.navigateForward('/home');
  }

  jogarSudoku() {
    this.navCtrl.navigateForward('/sudokuGame');
  }

  selectionEasy() {
    this.Selected = 1
    console.log(this.Selected)
  }


  selectionMedium() {
    this.Selected = 2
    console.log(this.Selected)
  }

  selectionHard() {
    this.Selected = 3
    console.log(this.Selected)
  }
}
