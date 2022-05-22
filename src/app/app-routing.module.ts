import { RankingComponent } from './ranking/ranking.component';
import { SobreComponent } from './telas/sobre/sobre.component';
import { SudokuGameComponent } from './games/sudokuGame/sudokuGame.component';
import { ReflectionGameComponent } from './games/reflectionGame/reflectionGame.component';
import { MemoriaGameComponent } from './games/memoriaGame/memoriaGame.component';
import { ReflectionComponent } from './reflection/reflection.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SudokuComponent } from './sudoku/sudoku.component';
import { ComojogarComponent } from './telas/comojogar/comojogar.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'memoria',
    component: MemoriaComponent
  },

  {
    path: 'sudoku',
    component: SudokuComponent
  },

  {
    path: 'memoriaGame',
    component: MemoriaGameComponent
  },

  {
    path: 'reflectionGame',
    component: ReflectionGameComponent
  },

  {
    path: 'sudokuGame',
    component: SudokuGameComponent
  },

  {
    path: 'reflection',
    component: ReflectionComponent
  },

  {
    path: 'sobre',
    component: SobreComponent
  },

  {
    path: 'comojogar',
    component: ComojogarComponent
  },

  {
    path: 'ranking',
    component: RankingComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
