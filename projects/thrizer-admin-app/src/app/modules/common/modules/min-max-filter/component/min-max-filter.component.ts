import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

interface IRange {
  label: string;
  min: FormControl;
  max: FormControl;
}
@Component({
  selector: "app-min-max-filter",
  templateUrl: "./min-max-filter.component.html",
  styleUrls: ["./min-max-filter.component.scss"],
})
export class MinMaxFilterComponent implements OnInit {
  @Input() rangeObject: IRange;

  constructor() {}

  ngOnInit() {
    console.log(this.rangeObject, "rangeObject");
  }
}
