import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcularPageRoutingModule } from './calcular-routing.module';

import { CalcularPage } from './calcular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcularPageRoutingModule
  ],
  declarations: [CalcularPage]
})
export class CalcularPageModule {}
