import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VertodoPage } from './vertodo.page';

const routes: Routes = [
  {
    path: '',
    component: VertodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VertodoPageRoutingModule {}
