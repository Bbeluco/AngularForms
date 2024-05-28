import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaItens!: Item[];

  constructor(private listaCompraService: ListaDeCompraService) { }
  
  ngOnInit(): void {
    this.listaItens = this.listaCompraService.getListaDeCompra();
  }
}
