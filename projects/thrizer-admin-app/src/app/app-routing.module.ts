import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUTH, ADMIN, FEATURE } from './constants/routes';
import { AuthGuard } from './guards/auth/auth.guard';
import { HomeGuard } from './guards/home/home.guard';
// import { HomeGuard } from './guards/home/home.guard';


const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: AUTH.path,
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canLoad: [AuthGuard], canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./modules/features/features.module').then((m) => m.FeaturesModule),
    canActivate: [HomeGuard], canLoad: [HomeGuard]
  },
  {
    path: '**',
    loadChildren: () =>
      import('./shared/not-found/not-found.module').then((m) => m.NotFoundModule
    ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
