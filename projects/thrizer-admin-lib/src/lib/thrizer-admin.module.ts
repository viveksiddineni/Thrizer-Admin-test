import { NgModule } from '@angular/core';
import { ThrizerAdminComponent } from './thrizer-admin.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ThrizerAdminComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          {path: '', component: ThrizerAdminComponent},
          {path: '', component: ThrizerAdminComponent, outlet: 'center'}
        ]
      }
    ])
  ],
  exports: [ThrizerAdminComponent]
})
export class ThrizerAdminModule { }
