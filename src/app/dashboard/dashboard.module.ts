import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormUsuarioModule } from './form-usuario/form-usuario.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormUsuarioModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
