import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemParaSerEditado!: Item;

  input!: string;
  editando: boolean = false;
  textoBtn: string = "Salvar item";


  constructor(private listaCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemParaSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = "Editar item";
      this.input = this.itemParaSerEditado?.nome
    }
  }

  adicionarItem() {
    this.listaCompraService.adicionarItemLista(this.input);
    this.input = ""
  }

  editarItem() {
    this.listaCompraService.editarItemLista(this.itemParaSerEditado, this.input);
    this.editando = false;
    this.textoBtn = "Salvar item"
    this.input = ""
  }
}
