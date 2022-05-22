import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NativePageTransitions } from '@awesome-cordova-plugins/native-page-transitions/ngx';


import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  providers: [
    NativePageTransitions
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
