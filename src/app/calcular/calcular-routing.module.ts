import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularPage } from './calcular.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularPageRoutingModule {}
