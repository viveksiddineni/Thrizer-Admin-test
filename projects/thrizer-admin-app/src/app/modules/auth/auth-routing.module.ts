import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './view/auth.component';
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD, SIGNUP } from 'projects/thrizer-admin-app/src/app/constants/routes';
import { AuthGuard } from '../../guards/auth/auth.guard';


const routes: Routes = [
  {
      path: '', component: AuthComponent,
      children: [
          { path: '', redirectTo: LOGIN.path, pathMatch: 'full' },
          {
              path: LOGIN.path,
              loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
              canActivate:[AuthGuard]
          },
          {
              path: FORGOT_PASSWORD.path,
              loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
              canActivate:[AuthGuard]
          },
          {
              path: `${RESET_PASSWORD.path}/:token`,
              loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule),
              canActivate:[AuthGuard]
          },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
