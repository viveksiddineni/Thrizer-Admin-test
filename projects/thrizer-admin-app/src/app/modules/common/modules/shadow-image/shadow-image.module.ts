import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ShadowImageComponent } from './shadow-image/shadow-image.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { SafeModule } from 'projects/thrizer-admin-app/src/app/pipes/safe/safe.module';

@NgModule({
  declarations: [ShadowImageComponent, ViewImageComponent],
  imports: [CommonModule, RouterModule, MatDialogModule, SafeModule],
  exports: [ShadowImageComponent, RouterModule, MatDialogModule],
  entryComponents: [ViewImageComponent]
})
export class ShadowImageModule {}
