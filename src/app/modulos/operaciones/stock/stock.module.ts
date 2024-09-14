import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogingresostockComponent } from './dialogingresostock/dialogingresostock.component';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    StockComponent,
    DialogingresostockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    DividerModule
  ],
  exports: [
    StockComponent
  ]
})
export class StockModule { }
