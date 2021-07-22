import {
  Component,
  Inject,
  OnInit,
  HostListener,
  ViewEncapsulation
} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewImageComponent implements OnInit {
  constructor(
    public _dialogRef: MatDialogRef<ViewImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {}

  closeView(data) {
    this._dialogRef.close(data);
  }
  close() {
    this._dialogRef.close();
  }
}
