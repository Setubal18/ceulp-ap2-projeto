import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstatisticasComponent } from './estatisticas.component';



@NgModule({
  declarations: [
    EstatisticasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EstatisticasComponent
  ]
})
export class EstatisticasModule { }
