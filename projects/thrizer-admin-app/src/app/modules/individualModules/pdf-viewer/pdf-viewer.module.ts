import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatDialogModule } from '@angular/material';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  declarations: [PdfViewerComponent],
  imports: [CommonModule, MatDialogModule, NgxDocViewerModule],
  entryComponents: [PdfViewerComponent],
})
export class PdfViewModule {}
