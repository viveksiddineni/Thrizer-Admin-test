import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteDialogComponent } from './auto-complete-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


const MATERIAL = [
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatDialogModule,
  MatInputModule,
];

@NgModule({
  declarations: [AutoCompleteDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MATERIAL,
  ],
  entryComponents: [AutoCompleteDialogComponent]
})
export class AutoCompleteDialogModule { }
