import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  produto = {
    id: 4, 
    produto: "Tênis Adidas Barricade Feminino - Branco+Vermelho",
    preco:"R$474,49",
    descricao:"Dê o seu melhor nas quadras de Tênis com esse novo Tênis Adidas Barricade Feminino. Confeccionado em material reciclado para as mulheres que buscam qualidade e conciência no sportwear, para ser usado em todos os tipo de quadra. O cabedal é confeccionado em mesh com aplicação sintética para durabilidade e respirabilidade, forro acolchoado, fechamento anatômico e suporte no calcanhar para estabilidade. A entressola conta com amortecimento Bounce para ótima absorção de impacto e retorno de energia, já o solado frisado em borracha Adiwear com resistência ao desgaste, oferece ótima precisão em movimentos multidirecionais, assim como a placa Torsion System para evitar possíveis torsões. Peça já seu tênis feminino e faça suas melhores jogadas!",
    miniDescricao:"Dê o seu melhor nas quadras de Tênis com esse novo Tênis Adidas Barricade Feminino.",
    imagem:"https://static.netshoes.com.br/produtos/tenis-adidas-barricade-feminino/24/FB8-0035-024/FB8-0035-024_zoom1.jpg" 
  }

  constructor() {}

}
