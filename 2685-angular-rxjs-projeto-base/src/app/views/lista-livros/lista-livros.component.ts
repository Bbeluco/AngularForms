import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/volumeInfo';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {
  nomeLivro = new FormControl()
  // listaLivros: Livro[];
  subscription: Subscription

  constructor(private livrosService: LivroService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  livrosEncontrados$ = this.nomeLivro.valueChanges.pipe(
    filter((valorDigitado) => valorDigitado.length >= 3),
    debounceTime(3000),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.livrosService.buscarLivro(valorDigitado)),
    map((items) => this.converterAPIparaObjeto(items))
  )

  converterAPIparaObjeto(items: Item[]) {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }

}



