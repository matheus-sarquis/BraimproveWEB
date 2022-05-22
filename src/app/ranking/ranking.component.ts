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
  // private data: DataService, 
  constructor(public navCtrl: NavController) {
    //this.getScore()
  }

  ngOnInit() { }

  backHome() {
    this.navCtrl.navigateForward('/home');
  }


  // getScore() {
  //   this.getMessages().subscribe((resp) => {
  //     console.log(resp)
  //     this.Scores = resp.lista
  //   })
  // }

  // getMessages(): Observable<any> {
  //   return this.data.getScore();
  // }

}
