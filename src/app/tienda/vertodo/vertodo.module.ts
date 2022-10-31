import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VertodoPageRoutingModule } from './vertodo-routing.module';

import { VertodoPage } from './vertodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VertodoPageRoutingModule
  ],
  declarations: [VertodoPage]
})
export class VertodoPageModule {}
