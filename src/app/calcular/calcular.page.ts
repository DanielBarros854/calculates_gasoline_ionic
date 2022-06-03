import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.page.html',
  styleUrls: ['./calcular.page.scss'],
})
export class CalcularPage implements OnInit {

  public precoGasolina: number;
  public precoAlcool: number;
  public resultado: string;
  public resultado2: number;
  private porcentagemConta = 0.7;


  constructor() { }

  ngOnInit() {
  }

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
