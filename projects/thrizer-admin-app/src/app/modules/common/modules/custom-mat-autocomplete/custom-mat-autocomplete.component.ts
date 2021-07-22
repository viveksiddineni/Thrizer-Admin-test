import { Component, OnInit, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { IAutocomplete } from "projects/thrizer-admin-app/src/app/constants/interface";
import { Subject, of } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  catchError,
} from "rxjs/operators";
import { HttpService } from "projects/thrizer-admin-app/src/app/services/http.service";
import { MatDialog } from "@angular/material/dialog";
import { AutoCompleteDialogComponent } from "../auto-complete-dialog/auto-complete-dialog.component";

@Component({
  selector: "app-custom-mat-autocomplete",
  templateUrl: "./custom-mat-autocomplete.component.html",
  styleUrls: ["./custom-mat-autocomplete.component.scss"],
})
export class CustomMatAutocompleteComponent implements OnInit {
  inputConfig: IAutocomplete = null;
  filterListArg: Array<any> = [];
  @Input()
  set filterList(data: any) {
    console.log(data);
    this.filterListArg = [...data, ...this.filterListArg] || [];
  }

  @Input()
  set config(data: IAutocomplete) {
    this.inputConfig = { ...data };
    if (data.control && data.control.value) {
      // this.optionList = data.control.value;
      this.selectedItems = data.control.value;
    }
  }
  isEdit = false;
  @Input()
  set editMode(data) {
    this.isEdit = data;
  }
  inputControl = new FormControl();

  optionList = [];
  optionSubject$: Subject<any> = new Subject();
  seperator = "$sep$";
  selectedItems = [];
  constructor(private http: HttpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.listenValueChanges();
  }

  listenValueChanges() {
    this.optionSubject$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchText) => {
          return this.searchListByText(searchText).pipe(
            map((resp) => {
              return { resp };
            }),
            catchError((e) => {
              return of({ resp: null });
            })
          );
        })
      )
      .subscribe((result) => {
        console.log(result);
        console.log(this.filterListArg);

        if (result.resp) {
          const values = [
            ...this.inputConfig.control.value || [],
            ...this.filterListArg,
          ];
          console.log(values);
          // values.splice(result.index, 1);
          const data = result.resp.data.data.filter(
            (item) => !values.find((valueItem) => valueItem._id == item._id)
          );

          this.optionList = [...data];
          // this.workoutResult[result.index] = data;
        }
      });
  }

  searchListByText(text) {
    let queryParams = {
      page: 1,
      search: text,
      limit: 10,
    };
    if (this.inputConfig && this.inputConfig.queryParams) {
      queryParams = { ...queryParams, ...this.inputConfig.queryParams };
    }
    return this.http.get(this.inputConfig.apiUrl, queryParams);
  }
  remove(i) {
    this.selectedItems.splice(i, 1);
    this.inputConfig.control.setValue(this.selectedItems);
  }

  optionSelected(event) {
    console.log(event.value);
    console.log(this.inputControl.value);
    const selectedValue = this.inputControl.value;
    let previousValues = [];
    if (
      this.inputConfig.control.value &&
      Array.isArray(this.inputConfig.control.value)
    ) {
      previousValues = [...this.inputConfig.control.value];
    } else {
      previousValues = [this.inputConfig.control.value];
    }
    this.inputConfig.control.setValue([...previousValues, selectedValue]);
    this.selectedItems = [...previousValues, selectedValue];

    const values = this.inputConfig.control.value;
    // values.splice(result.index, 1);
    const data = this.optionList.filter(
      (item) =>
        !values.find((valueItem) => valueItem && valueItem._id == item._id)
    );

    this.optionList = [...data];
    this.inputControl.setValue(null);
  }

  getOptionText = (option) => {
    if (!option) {
      return "";
    }
    return option[this.inputConfig.itemName.view];
  };
  viewMore(): void {
    const dialogRef = this.dialog.open(AutoCompleteDialogComponent, {
      width: "420px",
      data: { list: [...this.selectedItems], config: { ...this.inputConfig } },
    });
    dialogRef.componentInstance.emitDelete.subscribe((index) => {
      this.remove(index);
    });
  }
}
