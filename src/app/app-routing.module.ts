import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'public'
  },
  {
    path: 'public',
    loadChildren: () => import('./public/public.module')
    .then(r => r.PublicModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
    .then(r => r.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
