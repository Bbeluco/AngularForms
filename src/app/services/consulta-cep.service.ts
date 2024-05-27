import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IViaCepReturn } from './interfaces/IViaCepReturn';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  private readonly URL_API: string = "https://viacep.com.br/ws";

  constructor(private http: HttpClient) { }

  getConsultaCEP(cep: string): Observable<IViaCepReturn> {
    return this.http.get<IViaCepReturn>(`${this.URL_API}/${cep}/json`)
  }
}
