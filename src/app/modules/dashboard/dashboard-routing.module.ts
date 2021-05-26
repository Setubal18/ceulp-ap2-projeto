import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'atividade1',
  },
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'atividade1',
        loadChildren:() => import('./atividade1/atividade1.module')
        .then(r => r.Atividade1Module)
      },
      {
        path:'secret',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
