import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { HeaderModule } from '../layout/layout-parts/header/header.module';
import { SidebarModule } from '../layout/layout-parts/sidebar/sidebar.module';
import { Routes, RouterModule } from '@angular/router';
import { SUGGESTIONS } from '../../constants/routes';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', redirectTo: SUGGESTIONS.path, pathMatch: 'full' },

      {
        path: SUGGESTIONS.path,
        loadChildren: () =>
          import('./behaviour-words-management/behaviour-words-management.module').then(
            (m) => m.BehaviourWordsManagementModule
          ),
      },
    ]
}
]

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    SidebarModule
  ]
})
export class FeaturesModule { }
