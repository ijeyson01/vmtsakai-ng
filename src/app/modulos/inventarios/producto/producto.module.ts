import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TableModule } from 'primeng/table';
import { ProductoComponent } from './producto/producto.component';
import { DialogproductoComponent } from './producto/dialogproducto/dialogproducto.component';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputGroupModule } from 'primeng/inputgroup';
import { FindcategoriaModule } from "../../../shared/findcategoria/findcategoria.module";


@NgModule({
  declarations: [
    ProductoComponent,
    DialogproductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    TableModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    InputGroupModule,
    FindcategoriaModule
]
})
export class ProductoModule { }
