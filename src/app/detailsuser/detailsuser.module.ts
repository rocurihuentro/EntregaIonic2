import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsuserPageRoutingModule } from './detailsuser-routing.module';

import { DetailsuserPage } from './detailsuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsuserPageRoutingModule
  ],
  declarations: [DetailsuserPage]
})
export class DetailsuserPageModule {}
