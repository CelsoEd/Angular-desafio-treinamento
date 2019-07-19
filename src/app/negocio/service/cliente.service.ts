import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../dominio/cliente';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  buscarTodos(): Observable<Array<Cliente>> {
    const url = environment.baseUrl + 'cliente/todos';
    return this.httpClient.get<Array<Cliente>>(url);
  }
}
