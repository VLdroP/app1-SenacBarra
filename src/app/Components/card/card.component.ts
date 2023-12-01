import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  @Input() imagem:any=''
  @Input() subTitulo:any=''
  @Input() titulo:any=''
  @Input() conteudo:any=''
  @Input() botao:any=''
  constructor() { }

  ngOnInit() {}

}
