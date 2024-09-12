import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FindcategoriaModule } from './findcategoria/findcategoria.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    FindcategoriaModule
  ]
})
export class SharedModule { }
