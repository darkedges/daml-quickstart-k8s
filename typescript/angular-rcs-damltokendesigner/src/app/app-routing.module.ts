import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./views/tokendesign/tokendesign.module').then(m => m.TokenDesignModule)
  },
  {
    path: '**',
    redirectTo: 'design'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
