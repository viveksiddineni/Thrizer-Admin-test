import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuillModule } from "ngx-quill";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { QuillComponent } from "./quill.component";
import { ValidationErrorPipeModule } from "projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module";
import { HtmlEditorComponent } from "./html-editor/html-editor.component";
import { GetControlModule } from "projects/thrizer-admin-app/src/app/pipes/get-control";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [QuillComponent, HtmlEditorComponent],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    FormsModule,
    MatFormFieldModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    GetControlModule,
  ],
  exports: [QuillComponent],
  entryComponents: [HtmlEditorComponent],
})
export class QuillEditorModule {}
