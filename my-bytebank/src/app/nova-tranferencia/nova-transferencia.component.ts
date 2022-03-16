import { Component, EventEmitter, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTranferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir(){
    console.log('solicitado nova tranferencia')
    const valorEmitir = { valor: this.valor , destino: this.destino
    };
    this.aoTranferir.emit(valorEmitir)


}
