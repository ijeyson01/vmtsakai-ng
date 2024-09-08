import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { ComponenteComponent } from './componente/componente.component';


@NgModule({
  declarations: [
    ComponenteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule``,
    TableModule,
    ToggleButtonModule,
    ToastModule
  ]
})
export class ClienteModule { }
