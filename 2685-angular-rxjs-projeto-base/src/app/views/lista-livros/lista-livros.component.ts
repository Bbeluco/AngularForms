import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {
  nomeLivro: string = "";
  listaLivros: [];
  subscription: Subscription

  constructor(private livrosService: LivroService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  pesquisarLivro() {
    this.subscription = this.livrosService.buscarLivro(this.nomeLivro).subscribe({
      next: x => console.log(x),
      error: error => console.log(error),
      complete: () => console.log("Operacao finalizada")
    })
  }

}



