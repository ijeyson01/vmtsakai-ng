import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogclienteComponent } from './dialogcliente/dialogcliente.component';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class ComponenteComponent implements OnInit {

  constructor(public layoutService: LayoutService, private productService: ProductService, private messageService: MessageService) {}
  
  activityValues: number[] = [0, 100];
  
  @ViewChild('dialogoCliente') dialogoCliente: DialogclienteComponent; 
  
  clientes: any[] = [
    {
      nombre: 'Bootcampt VmtDev',
      identificacion: '1234567890',
      fechaIngreso: '2024-08-18',
      estatus: {
        label: 'Activo',
        value: 'qualified'
      },
    }
  ];
  
  statuses = [
    { label: 'Inactivo', value: 'unqualified' },
    { label: 'Activo', value: 'qualified' }
  ];
  
  ngOnInit(): void {
  }

  dialogNuevoCliente(){
    this.dialogoCliente.visibleClient = true;
  }
}
