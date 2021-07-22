import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DropDown } from "projects/thrizer-admin-app/src/app/constants/interface";

@Component({
  selector: "app-dropdown-filter",
  templateUrl: "./dropdown-filter.component.html",
  styleUrls: ["./dropdown-filter.component.scss"],
})
export class DropdownFilterComponent implements OnInit {
  @Input() accessKeys = {
    value: "value",
    viewValue: "viewValue",
  };
  dropdownConfig: any = {};
  @Input()
  set dropdown(data: DropDown) {
    this.dropdownConfig = { ...data };
    // console.log("dropdownconfig",this.dropdownConfig);
  }
  @Output() selectionChangeEvent = new EventEmitter();
  @Output() searchText = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // console.log("dropdown",this.accessKeys)
  }
  emitSelectionChange(event) {
    this.selectionChangeEvent.emit(event.value);
  }
  selectionDialogChange(event) {
    if (!event && !this.dropdownConfig.control.value) {
      this.searchFromList("");
    }
  }

  searchFromList(text) {
    this.searchText.emit(text);
  }
}
