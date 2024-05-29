import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoItemParaRemover = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;
  itemComprado = '';

  constructor(private listaDeCompraService: ListaDeCompraService) { }
  
  ngOnInit(): void { }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  mudarEstadoItem() {
    this.item.comprado = !this.item.comprado;
    if(this.item.comprado) {
      this.itemComprado = 'line-through'
    } else {
      this.itemComprado = ''
    }

    this.listaDeCompraService.editarItemLista(this.item, this.item.nome);
  }

  removerItem() {
    this.emitindoItemParaRemover.emit(this.item.id);
  }
}
