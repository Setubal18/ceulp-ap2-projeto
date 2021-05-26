import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Atividade1Component } from './atividade1.component';

const routes: Routes = [
  {
    path:'',
    component:Atividade1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Atividade1RoutingModule { }
