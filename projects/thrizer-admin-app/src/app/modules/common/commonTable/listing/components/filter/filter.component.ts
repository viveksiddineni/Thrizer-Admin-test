import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  @Input() label = "Filter";
  @Output() apply: EventEmitter<void> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();
  constructor(private $dialogRef: MatDialogRef<any>) {}

  ngOnInit() {}
  onCloseHandler() {
    this.$dialogRef.close();
  }
}
