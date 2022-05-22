import { RankingComponent } from './ranking/ranking.component';
import { MemoriaGameComponent } from './games/memoriaGame/memoriaGame.component';
import { ComojogarComponent } from './telas/comojogar/comojogar.component';
import { SobreComponent } from './telas/sobre/sobre.component';
import { SudokuGameComponent } from './games/sudokuGame/sudokuGame.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { ReflectionComponent } from './reflection/reflection.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {enableProdMode} from '@angular/core';
import { InforankingComponent } from './inforanking/inforanking.component';

enableProdMode();

@NgModule({
  declarations: [AppComponent, MemoriaComponent, ReflectionComponent, SudokuComponent, SudokuGameComponent, ComojogarComponent, MemoriaGameComponent, SobreComponent, RankingComponent, InforankingComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
