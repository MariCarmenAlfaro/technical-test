import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  // Utilizamos BehaviorSubject para emitir cambios

@Injectable({
  providedIn: 'root'
})
export class ComunicaionService {
  private mensajeSource = new BehaviorSubject<string>(''); // valor inicial vacío
  mensaje$ = this.mensajeSource.asObservable(); // hacemos el Subject observable

  // Método para actualizar el valor del mensaje
  actualizarMensaje(mensaje: string) {
    this.mensajeSource.next(mensaje); // Emite el nuevo valor
  }
}
