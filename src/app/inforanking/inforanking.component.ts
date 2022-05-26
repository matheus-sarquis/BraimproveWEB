import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inforanking',
  templateUrl: './inforanking.component.html',
  styleUrls: ['./inforanking.component.scss'],
})
export class InforankingComponent implements OnInit {
  @Input() score: any;

  constructor() { 
    console.log(this.score)
  }

  ngOnInit() {}

}
