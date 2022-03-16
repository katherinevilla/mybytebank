import { NovaTransferenciaComponent } from './nova-tranferencia/nova-transferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';
registerLocaleData(localept, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule


  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
