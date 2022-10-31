import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
