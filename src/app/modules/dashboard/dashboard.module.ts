import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormUsuarioModule } from './form-usuario/form-usuario.module';
import { UserListsComponent } from './user-lists/user-lists.component';
import { UserListsModule } from './user-lists/user-lists.module';
import { EstatisticasModule } from './estatisticas/estatisticas.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormUsuarioModule,
    EstatisticasModule,
    UserListsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
