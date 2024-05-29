import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API_URL = "https://www.googleapis.com/books/v1/volumes"

  constructor(private http: HttpClient) { }

  buscarLivro(nomeLivro: string) {
    const params = new HttpParams().append('q', nomeLivro)

    return this.http.get(this.API_URL, { params });
  }
}
