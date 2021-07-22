import { Component, OnInit, Inject, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IQuildConfig } from "projects/thrizer-admin-app/src/app/constants/interface";
import { FormService } from 'projects/thrizer-admin-app/src/app/services/form.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: "app-html-editor",
  templateUrl: "./html-editor.component.html",
  styleUrls: ["./html-editor.component.scss"],
})
export class HtmlEditorComponent implements OnInit {
  htmlEditorForm: FormGroup;
  constructor(
    private formService: FormService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<HtmlEditorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.htmlEditorForm = this.fb.group({
      editor: this.formService.getControl("cmsDesc"),
    });
  }
  submit() {
    const content = this.htmlEditorForm.get("editor").value;
    this.dialogRef.close(content);
  }
  close() {
    this.dialogRef.close();
  }
}
