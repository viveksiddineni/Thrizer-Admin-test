import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChildren,
  QueryList,
  EventEmitter,
  ContentChildren,
} from "@angular/core";

import { ForDirective } from "../for";
import { MatTableDataSource } from "@angular/material/table";
import { MatCheckbox, MatCheckboxChange } from "@angular/material/checkbox";
import { Table } from "./table.types";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  exportAs: "DataTable",
})
export class TableComponent implements OnInit {
  @Input() tableSource: Table.Source<any>;
  @Output() changeTableEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeTableSelectionEvent: EventEmitter<any> = new EventEmitter();
  get dataSource(): MatTableDataSource<any> {
    // console.log(this.tableSource.data.length, 'ewfewfewf');
    // if (this.rowCheckBoxes) {
    //   console.log(this.rowCheckBoxes, "this.checkBoxList.toArray()");
    // }
    return new MatTableDataSource(this.tableSource.data);
  }
  get displayedColumns(): string[] {
    const columns = this.tableSource.columns.map((column) => column.id);
    return this.tableSource.options && this.tableSource.options.selection
      ? ["selection", ...columns]
      : columns;
  }
  @ContentChildren(ForDirective) templates: QueryList<ForDirective>;
  @ViewChildren(MatCheckbox) checkBoxList: QueryList<MatCheckbox>;
  get checkBoxes(): MatCheckbox[] {
    return this.checkBoxList ? this.checkBoxList.toArray() : [];
  }
  get rowCheckBoxes(): MatCheckbox[] {
    return this.checkBoxes.filter((_, index: number) => index > 0);
  }
  get selection() {
    return this.rowCheckBoxes.reduce((total, checkBox, index) => {
      if (checkBox.checked) {
        return [...total, { ...this.tableSource.data[index] }];
      }
      return total;
    }, []);
  }
  constructor() {}

  ngOnInit() {}
  templateOutlet(column: Table.Column<any>) {
    if (this.templates) {
      const template = this.templates.find(
        (query) => query.name === column.templateBy
      );
      return template ? template.ref : null;
    }
    return null;
  }
  onHeadSelectionChangeHandler(event: MatCheckboxChange) {
    this.rowCheckBoxes.forEach((checkBox: MatCheckbox) => {
      if (
        (event.checked && !checkBox.checked) ||
        (!event.checked && checkBox.checked)
      ) {
        checkBox.toggle();
      }
    });
    this._emitChangeEvent();
  }
  onSelectionChangeHandler(event: MatCheckboxChange) {
    const someUnChecked = this.rowCheckBoxes.some(
      (checkBox) => !checkBox.checked
    );
    const everyChecked = this.rowCheckBoxes.every(
      (checkBox) => checkBox.checked
    );
    if (
      (someUnChecked && this.checkBoxList.first.checked) ||
      (everyChecked && !this.checkBoxList.first.checked)
    ) {
      this.checkBoxList.first.toggle();
    }
    this._emitChangeEvent();
  }
  private _emitChangeEvent() {
    this.changeTableSelectionEvent.emit(
      this.rowCheckBoxes.reduce((total, checkBox, index) => {
        if (checkBox.checked) {
          return [...total, { ...this.dataSource.data[index] }];
        }
        return total;
      }, [])
    );
  }
  sortData(event) {
    console.log("sort", event);

    this.changeTableEvent.emit(event);
  }
}
