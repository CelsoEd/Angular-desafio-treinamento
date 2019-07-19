import {Component, Input, OnInit} from '@angular/core';
import {Cliente} from '../../negocio/dominio/cliente';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.css']
})
export class ListagemClienteComponent implements OnInit{

  @Input() clientes: Array<Cliente>;

 // @Output() clienteSelecionado = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  // seleciona(cliente: Cliente) {
  //   this.clienteSelecionado.emit(cliente);
  // }

}
