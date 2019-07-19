import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../negocio/dominio/cliente';
import {ClienteService} from '../../negocio/service/cliente.service';

@Component({
  selector: 'app-crud-cliente',
  templateUrl: './crud-cliente.component.html',
  styleUrls: ['./crud-cliente.component.css']
})
export class CrudClienteComponent implements OnInit {

  clientes: Array<Cliente>;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  private buscaClientes() {
    const observable = this.clienteService.buscarTodos();

    observable.subscribe(clientes => {
      this.clientes = clientes;
      console.log(this.clientes);
    });
  }
}
