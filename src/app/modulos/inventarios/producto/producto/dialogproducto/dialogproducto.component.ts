import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { AccionApi } from 'src/app/datasource/accionapienum';

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

  esNuevo: boolean;
  dataGuardar: any;

  idProducto: any = null;
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
    this.dataGuardar = this.regDataBase(AccionApi.GUARDAR);
    this.datosProducto.emit(this.dataGuardar);
  }

  abrir() {
      this.idProducto = null;
      this.nombre = '';
      this.precio = 0.00;
      this.categoria = '';
      this.empresa = '';
      this.proveedor = '';
      this.estatus = '';
  }

  actualizar() {
    this.dataGuardar = this.regDataBase(AccionApi.ACTUALIZAR);
    this.datosProducto.emit(this.dataGuardar);
  }

  regDataBase(accionApi: AccionApi) {
    let dataGuardar = {
      accion: accionApi,
      nombre: this.nombre,
      precio: this.precio,
      categoria: this.categoria,
      empresa: this.empresa,
      proveedor: this.proveedor,
      estatus: this.estatus.value
    }
    return dataGuardar;
  }
  

}
