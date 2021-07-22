import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { quillConfigConst } from "projects/thrizer-admin-app/src/app/constants/constants";
import { PATTERN } from "projects/thrizer-admin-app/src/app/constants/patterns";
import { FormControl } from "@angular/forms";
import { IQuildConfig } from "projects/thrizer-admin-app/src/app/constants/interface";
import { HtmlEditorComponent } from "./html-editor/html-editor.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-quill",
  templateUrl: "./quill.component.html",
  styleUrls: ["./quill.component.scss"],
})
export class QuillComponent {
  modules = quillConfigConst;
  editorData: any = {};
  @Input() quillConfig: IQuildConfig;
  @Output() editContent = new EventEmitter<any>();
  @Input()
  set data(data) {
    if (data && data.body) {
      this.editorData = data.body;
      console.log("editor data", this.editorData);
    } else {
      this.editorData = null;
    }
  }

  htmlString = '<p  style="color:red;">bold</p>';
  constructor(private dialog: MatDialog) {
    // this.quillControl.valueChanges.subscribe((resp) => {
    //   console.log(resp);
    // });
  }

  onContentChanged(event) {
    // debugger;
    if (event.html) {
      const text = event.html.replace(PATTERN.removeHTML, "").trim();
      console.log("text", text, text.length);
      if (text.length === 0) {
        this.editorData = null;
        event.html = null;
      }

      // event.html = event.html.trim();
    } else {
      console.log(event.html);
    }
    console.log(event.html);
    this.editContent.emit(event);
  }

  insertHtml() {
    const dialogRef = this.dialog.open(HtmlEditorComponent, {
      width: "800px",
      data: { config: this.quillConfig },
    });
    dialogRef.afterClosed().subscribe((resp) => {
      console.log({ resp });
      if (resp) {
        this.quillConfig.control.setValue(resp);
      }
    });
  }
}
