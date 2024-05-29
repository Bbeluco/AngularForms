import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API_URL = "https://www.googleapis.com/books/v1/volumes"

  constructor(private http: HttpClient) { }

  buscarLivro(nomeLivro: string): Observable<Item[]> {
    const params = new HttpParams().append('q', nomeLivro)

    return this.http.get<LivrosResultado>(this.API_URL, { params })
      .pipe(
        tap(r => console.log("Fluxo 1 tap: " + r)),
        map(r => r.items),
        tap(r => console.log("Fluxo 2 tap: " + r))
      );
  }
}
