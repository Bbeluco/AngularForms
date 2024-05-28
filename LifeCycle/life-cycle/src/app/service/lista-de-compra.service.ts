import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {
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
  }

  adicionarItemLista(nome: string) {
    this.listaDeCompra.push(this.criarItem(nome));
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
}
