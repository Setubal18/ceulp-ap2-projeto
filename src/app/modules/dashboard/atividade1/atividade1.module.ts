import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Atividade1RoutingModule } from './atividade1-routing.module';
import { Atividade1Component } from './atividade1.component';
import { EstatisticasModule } from './estatisticas/estatisticas.module';
import { FormUsuarioModule } from './form-usuario/form-usuario.module';
import { UserListsModule } from './user-lists/user-lists.module';


@NgModule({
  declarations: [
    Atividade1Component
  ],
  imports: [
    CommonModule,
    Atividade1RoutingModule,
    FormUsuarioModule,
    EstatisticasModule,
    UserListsModule,
  ]
})
export class Atividade1Module { }
