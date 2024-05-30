import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/volumeInfo';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {
  nomeLivro: string = "";
  listaLivros: Livro[];
  subscription: Subscription

  constructor(private livrosService: LivroService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  pesquisarLivro() {
    this.subscription = this.livrosService.buscarLivro(this.nomeLivro).subscribe({
      next: x => {this.listaLivros = this.converterAPIparaObjeto(x)},
      error: error => console.log(error),
      complete: () => console.log("Operacao finalizada")
    })
  }

  converterAPIparaObjeto(items: Item[]) {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }

}



