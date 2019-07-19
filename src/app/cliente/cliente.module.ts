import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';



@NgModule({
  declarations: [
    CadastrarClienteComponent,
    ListagemClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
