import { UploadPopupComponent } from './upload-popup/upload-popup.component';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from './image-cropper/image-cropper.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [UploadPopupComponent],
  entryComponents: [UploadPopupComponent],
})
export class CropperModule { }
