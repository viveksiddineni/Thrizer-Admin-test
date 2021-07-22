import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-auto-complete-dialog",
  templateUrl: "./auto-complete-dialog.component.html",
  styleUrls: ["./auto-complete-dialog.component.scss"],
})
export class AutoCompleteDialogComponent implements OnInit {
  @Output() emitDelete = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<AutoCompleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    console.log(this.data);
  }
  delete(index) {
    this.data.list.splice(index, 1);
    this.emitDelete.next(index);
  }
}
