import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  editarItemLista(itemAntigo: Item, novoNome: string) {
    let item: Item = {
      id: itemAntigo.id,
      nome: novoNome,
      comprado: itemAntigo.comprado,
      data: itemAntigo.data
    }

    this.listaDeCompra[Number(item.id)-1] = item;
    this.atualizarLocalStorage();
  }

  adicionarItemLista(nome: string) {
    this.listaDeCompra.push(this.criarItem(nome));
    this.atualizarLocalStorage();
  }

  criarItem(nome: string): Item {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nome,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }

    return item;
  }

  removerItem(id: number): void {
    const idRemocao = this.listaDeCompra.findIndex(x => x.id === id);
    console.log(this.listaDeCompra);
    console.log(idRemocao);
    this.listaDeCompra.splice(idRemocao, 1);
    this.atualizarLocalStorage();
  }
}
