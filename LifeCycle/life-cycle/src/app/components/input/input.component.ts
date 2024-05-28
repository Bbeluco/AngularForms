import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input!: string;
  constructor(private listaCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
  }

  adicionarItem() {
    this.listaCompraService.adicionarItemLista(this.input);
  }
}
