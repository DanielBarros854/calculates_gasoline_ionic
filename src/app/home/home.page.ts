import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public precoGasolina: number;
  public precoAlcool: number;
  public resultado: string;
  public resultado2: number;
  private porcentagemConta = 0.7;

  constructor() {}

  public calcular() {
    if (
      this.precoAlcool/this.precoGasolina < this.porcentagemConta
    ) {
      this.resultado = 'Abasteça com álcool!';
    } else {
      this.resultado = 'Abasteça com gasolina!';
    };
  }
}
