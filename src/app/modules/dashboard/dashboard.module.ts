import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
