import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsuserPage } from './detailsuser.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsuserPageRoutingModule {}
