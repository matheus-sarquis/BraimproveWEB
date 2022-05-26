import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {

  Scores = []
  ScoresDefault = []
  constructor(public navCtrl: NavController, private data: DataService) {
    this.getScore()
  }

  ngOnInit() { }

  backHome() {
    this.navCtrl.navigateForward('/home');
  }


  getScore() {
    this.getMessages().subscribe((resp) => {
      console.log(resp)
      this.Scores = resp
      this.ScoresDefault = resp
      this.orderbyScores()
      this.addPositionScores()
    })
  }

  getMessages(): Observable<any> {
    return this.data.getScore();
  }

  rankingSudoku() {
    this.validScores()
    let scoresSudoku = new Array()
    this.Scores.forEach(element => {
      if (element.game == 'sudoku')
        scoresSudoku.push(element)
    });
    this.Scores = scoresSudoku
    this.orderbyScores()
    this.addPositionScores()

  }
  rankingMemoria() {
    this.validScores()
    let scoresMemoria = new Array()
    this.Scores.forEach(element => {
      if (element.game == 'memoria')
        scoresMemoria.push(element)
    });

    this.Scores = scoresMemoria
    this.orderbyScores()
    this.addPositionScores()
    //var sortedArray: number[] = numericArray.sort((n1,n2) => n1 - n2);
  }


  validScores() {
    if (this.Scores.length != this.ScoresDefault.length)
      this.Scores = this.ScoresDefault
  }

  orderbyScores() {
    this.Scores = this.Scores.sort((n1, n2) => {
      if (n1.score > n2.score)
        return -1
      if (n1.score < n2.score)
        return 1
      return 0
    })
  }

  addPositionScores() {
    this.orderbyScores()
    var i = 1;
    this.Scores.forEach(element => {
      element.position = i++;
    })

  }
}
