import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogproducto.component.html',
  styles: ``
})
export class DialogproductoComponent {

  @ViewChild(Dialog) dialogoGenerico: Dialog;

  @Input()
  registro: any;

  @Output() 
  datosProducto = new EventEmitter<any>();

  nombre: string;
  precio: number;
  categoria: string;
  empresa: string;
  proveedor: string;
  estatus: any;

  visibleClient: boolean = false;

  statuses: any [] = [
    {
      label: 'Activo',
      value: 'activo'
    },
    {
      label: 'Inactivo',
      value: 'inactivo'
    },
  ]

  guardar() {
    let dataGuardar = {
      nombre: this.nombre,
      precio: this.precio,
      categoria: this.categoria,
      empresa: this.empresa,
      proveedor: this.proveedor,
      estatus: this.estatus.value
    }
    this.datosProducto.emit(dataGuardar);
  }

  abrir() {
      this.nombre = '';
      this.precio = 0.00;
      this.categoria = '';
      this.empresa = '';
      this.proveedor = '';
      this.estatus = '';
  }

  

}
