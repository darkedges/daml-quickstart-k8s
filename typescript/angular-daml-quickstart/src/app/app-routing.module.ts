import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './core/auth/authguard.service';
import { DashBoardComponent } from './core/pages/dashboard/dashboard.component';
import { AccessTokenComponent } from './core/pages/auth/AccessToken/accessToken.component';
import { LogoutComponent } from './core/auth/logout.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashBoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'accesstoken',
    component: AccessTokenComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
