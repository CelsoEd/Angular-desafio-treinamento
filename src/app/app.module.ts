import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositoComponent,
    SaqueComponent,
    TransferenciaComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
