import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepositoComponent} from './pages/deposito/deposito.component';
import {SaqueComponent} from './pages/saque/saque.component';
import {TransferenciaComponent} from './pages/transferencia/transferencia.component';


const routes: Routes = [
  {
    path: 'deposito',
    component: DepositoComponent
  },
  {
    path: 'saque',
    component: SaqueComponent,
  },
  {
    path: 'transferencia',
    component: TransferenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
