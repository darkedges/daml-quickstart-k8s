import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenDesignerComponent } from './components/designer/designer.component';


const routes: Routes = [
  {
    path: 'design',
    component: TokenDesignerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenDesignRoutingModule { }
