import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { DOC_TYPE } from 'projects/thrizer-admin-app/src/app/constant/enums';
@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent implements OnInit {
  // DOC_TYPE = DOC_TYPE;
  // docType = DOC_TYPE.PDF;
  constructor(
    public _dialogRef: MatDialogRef<PdfViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.docType = DOC_TYPE.PDF;
    // if (data && data.type === DOC_TYPE.DOC) {
    //   this.docType = DOC_TYPE.DOC;
    // }
  }

  ngOnInit() {}
  close() {
    this._dialogRef.close();
  }
}
