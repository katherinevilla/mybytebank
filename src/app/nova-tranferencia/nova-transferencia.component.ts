import { Component, EventEmitter, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTranferir = new EventEmitter<any>()

valor: number = 12;
destino: number = 222;

  transferir (){
    console.log('solicitando nova transferencia')

const valorEmitir = { valor: this.valor, destino: this.destino};
this.aoTranferir.emit(valorEmitir)
this.limparCampo();

  }
  limparCampo(){
    this.valor = 0;
    this.destino = 0;
  }
}
