import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
  TemplateRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
} from "@angular/core";

import { ForDirective } from "../for";
import { Pagination } from "projects/thrizer-admin-app/src/app/models/pagination";
import { TableComponent } from "../table/table.component";
import { Router } from "@angular/router";
import { Config } from "./listing.types";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.scss"],
})
export class ListingComponent
  extends Pagination
  implements OnInit, AfterViewInit, AfterContentInit {
  filterNumbers: any;
  prevFilterdata: any = {};

  @Input() config: Config;
  @Output() changeListEvent: EventEmitter<any> = new EventEmitter();
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();
  get label(): string {
    return this.config.label;
  }

  get totalList(): number {
    return this.config.total;
  }
  get hasSearch(): boolean {
    return this.config ? this.config.options.search : false;
  }
  @Input() placeholder;
  @Output() setSearch = new EventEmitter();
  search = "";
  clear: boolean = false;
  @ContentChildren(ForDirective) templates: QueryList<ForDirective>;
  get actions(): TemplateRef<any> {
    const actionsTemplate =
      this.templates &&
      this.templates.find(({ name }) => name === "list-actions");
    return actionsTemplate ? actionsTemplate.ref : null;
  }

  get size() {
    return this.limit;
  }
  @ViewChild("searchField", { static: false }) _searchRef: ElementRef<
    HTMLInputElement
  > = new ElementRef<HTMLInputElement>(null);

  @ContentChild(TableComponent, { static: false }) childTable: TableComponent;
  ngAfterContentInit() {
    // this.footer now points to the instance of `FooterComponent`
    this.childTable.changeTableEvent.subscribe((data) => {
      console.log("changeTableEvent", data);
      this.sortData(data);
    });
    this.childTable.changeTableSelectionEvent.subscribe((data) => {
      this.emitSelection(data);
    });
  }

  constructor(private dialog: MatDialog, private router: Router) {
    super();
  }

  ngOnInit() {}
  ngAfterViewInit() {}
  onFilterHandler() {
    if (this.config && this.config.options && this.config.options.filter) {
      if (this.filterOptions) {
        this.prevFilterdata = this.filterOptions;
      } else {
        this.prevFilterdata = {};
      }
      const subscription = this.dialog
        .open(this.config.options.filter, {
          panelClass: "openState",
          width: "400px",
          disableClose: false,
          position: {
            right: "20px",
          },
          autoFocus: false,
          data:
            this.filterOptions && Object.keys(this.filterOptions).length > 0
              ? this.filterOptions
              : null,
        })
        .afterClosed()
        .subscribe((filterData) => {
          console.log(filterData);

          if (
            filterData &&
            JSON.stringify(this.prevFilterdata) !== JSON.stringify(filterData)
          ) {
            this.filterNumbers = Object.keys(filterData).length;
            this.page = 1;
            this.filterOptions = filterData;
            this._emitEvent();
          } else {
            if (filterData) {
              this.filterNumbers = Object.keys(filterData).length;
            } else {
              this.filterNumbers = 0;
            }
          }

          subscription.unsubscribe();
        });
    }
  }

  onSearchFieldHandler(event: MouseEvent) {
    event.stopPropagation();
  }
  onPageHandler(data) {
    this.pageOptionsOnChange = data;
    this.resetSelection();
    this._emitEvent();
  }
  resetSearch() {
    this.search = "";
    this._searchRef.nativeElement.value = "";
    this._emitEvent();
  }
  searchData(event) {
    if (this.search !== event) {
      this.search = event;
      this.page = 1;
      this._emitEvent();
    }
  }
  private _emitEvent() {
    console.log(this.validPageOptions,);
    this.changeListEvent.emit({ ...this.validPageOptions });
  }

  private emitSelection(event) {
    this.selectionChange.emit(event);
  }
  resetSelection() {
    if (this.childTable.selection) {
      this.childTable.checkBoxList.map(
        (checkbox) => (checkbox.checked = false)
      );
    }
  }
  sortData(event) {
    // this.selectionChange.emit(event);
    this.sortOptions = event;
    this.resetPages();
    this._emitEvent();
  }
}
