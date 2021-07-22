import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PAGE_OPTIONS, STATUS } from 'projects/thrizer-admin-app/src/app/constants/constants';
import { MultiSelectDropdown } from 'projects/thrizer-admin-app/src/app/constants/interface';
import { UtilityService } from 'projects/thrizer-admin-app/src/app/shared/utility/utility.service';
import { FormUtils } from 'projects/thrizer-admin-app/src/app/shared/utils/form.utils';

@Component({
  selector: 'app-suggestion-filter',
  templateUrl: './suggestion-filter.component.html',
  styleUrls: ['./suggestion-filter.component.scss']
})
export class SuggestionFilterComponent implements OnInit {
  filterForm: FormGroup;
  dateFilter;
  pageOptions = { ...PAGE_OPTIONS };
  suggestionStatus = STATUS;
  statusDropdownData: MultiSelectDropdown;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private utilityService: UtilityService
  ) {
    this.createForm();
    // this.getFilterList();
    if (data) {
      this.filterForm.patchValue(data);
    }
   }

  ngOnInit(): void {
    this.setTypeDropdownData();
  }

  createForm() {
    this.filterForm = this.fb.group({
      status: '',
      startDate: [],
      endDate: [],
    });
    this.dateFilter = {
      label: "Added on",
      fromDate: this.filterForm.controls.startDate,
      toDate: this.filterForm.controls.endDate,
    };
  }

  setTypeDropdownData() {
    this.statusDropdownData = {
      controlsName: this.filterForm.get("status") as FormControl,
      label: "Suggestion Status",
      placeHolder: "Select status",
      list: STATUS,
      itemsShowLimit: 3,
      allowSearchFilter: true,
      itemNameKey: "viewValue",
      itemIdKey: "value",
      singleSelection: true,
    };
  }

  onApplyHandler() {
    const filterData = FormUtils.parse({ ...this.filterForm.value });
    Object.keys(filterData).forEach((key) => {
      console.log(
        filterData[key],
        Array.isArray(filterData[key]) && filterData[key].length === 0
      );

      if (Array.isArray(filterData[key]) && filterData[key].length === 0) {
        delete filterData[key];
      }
    });

    console.log(filterData);

    this.dialogRef.close(this.utilityService.parseDateToTimeStamp(filterData));
    this.filterForm.reset();
  }

  resetFilter() {
    this.filterForm.reset();
    this.setTypeDropdownData();
    // this.dialogRef.close({});
    // this.setAllDropdown();
  }

}
