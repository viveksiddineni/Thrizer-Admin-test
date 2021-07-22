import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-popup-progress",
  templateUrl: "./popup-progress.component.html",
  styleUrls: ["./popup-progress.component.scss"],
})
export class PopupProgressComponent implements OnInit {
  data: { percentageCompleted: number; fileName: string };
  constructor(
    private $dialogRef: MatDialogRef<PopupProgressComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: { percentageCompleted: number; fileName: string }
  ) {
    this.data = { ...data };
  }

  ngOnInit(): void {}
}
