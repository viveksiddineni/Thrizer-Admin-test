import { Component, OnInit, Input } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import {
  MultiSelectDropdown,
  EditMultiSelectDropdown,
} from "projects/thrizer-admin-app/src/app/constants/interface";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { isDataSource } from "@angular/cdk/collections";
import { isArray } from "util";

@Component({
  selector: "app-multiselect-dropdown",
  templateUrl: "./multiselect-dropdown.component.html",
  styleUrls: ["./multiselect-dropdown.component.scss"],
})
export class MultiselectDropdownComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  dropdownConfig: any = {};
  patchData: any;
  multiselectForm: FormGroup;
  selectedNames = [];
  selectedKeys = [];
  @Input()
  set dropdown(data: MultiSelectDropdown) {
    console.log(data, 'DATA CONTROLS')
    this.dropdownConfig = { ...data };
    // console.log(data.controlsId);
    // console.log(this.dropdownConfig);

    if (data.list) {
      this.dropdownList = this.dropdownConfig.list;
      this.setDropdownSetting();
      this.patchValues({ ...data });
    }
  }

  @Input()
  set dropdownPatch(data: EditMultiSelectDropdown) {
    console.log(data);
    if (data && (data?.ids?.length || data?.names?.length)) {
      this.patchData = { ...data };
      // this.patchDropdown(this.patchData);
    }
  }

  constructor(private fb: FormBuilder) {
    this.createMultiselectForm();
  }

  ngOnInit() {}

  createMultiselectForm() {
    this.multiselectForm = this.fb.group({
      item: new FormControl('',[Validators.required]),
    });
    this.checkFormChanges();
  }

  checkFormChanges() {
    this.multiselectForm.get("item").valueChanges.subscribe((res) => {
      let selectedNames = [];
      let selectedIds = [];
      // console.log(res);

      if (res.length > 0) {
        res.forEach((element) => {
          if (element && this.dropdownConfig.itemIdKey) {
            if (this.dropdownConfig.singleSelection) {
              selectedIds = element[this.dropdownConfig.itemIdKey];
            } else {
              selectedIds.push(element[this.dropdownConfig.itemIdKey]);
            }
          }
          if (element && this.dropdownConfig.itemNameKey) {
            if (this.dropdownConfig.singleSelection) {
              selectedNames = element[this.dropdownConfig.itemNameKey];
            } else {
              selectedNames.push(element[this.dropdownConfig.itemNameKey]);
            }
          }
        });
        if (this.dropdownConfig.itemIdKey && this.dropdownConfig.controlsId) {
          this.dropdownConfig.controlsId.setValue(selectedIds);
        }
        if (
          this.dropdownConfig.itemNameKey &&
          this.dropdownConfig.controlsName
        ) {
          this.dropdownConfig.controlsName.setValue(selectedIds);
        }
      } else {
        if (this.dropdownConfig.controlsName) {
          this.dropdownConfig.controlsName.setValue([]);
        }
        if (this.dropdownConfig.controlsId) {
          this.dropdownConfig.controlsId.setValue([]);
        }
        // console.log("in else multi");
      }
    });
  }

  setDropdownSetting() {
    this.dropdownSettings = {
      singleSelection: this.dropdownConfig.singleSelection,
      idField: this.dropdownConfig.itemIdKey,
      textField: this.dropdownConfig.itemNameKey,
      selectAllText: "Select All",
      unSelectAllText: "Unselect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    // console.log("dropdownSettings", this.dropdownSettings);
  }

  onItemSelect(item: any) {
    // console.log(item);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }

  getErrorMessage() {
    if (
      this.dropdownConfig.controlsId &&
      this.dropdownConfig.controlsId.invalid
    ) {
      return this.dropdownConfig.controlsId.hasError("required")
        ? `${this.dropdownConfig.label} is required`
        : this.dropdownConfig.controlsId.hasError("pattern")
        ? `Not a valid ${this.dropdownConfig.label}`
        : this.dropdownConfig.controlsId.hasError("minLength")
        ? "Required length is at least 3 characters"
        : "";
    }
    if (
      this.dropdownConfig.controlsName &&
      this.dropdownConfig.controlsName.invalid
    ) {
      return this.dropdownConfig.controlsName.hasError("required")
        ? `${this.dropdownConfig.label} is required`
        : this.dropdownConfig.controlsName.hasError("pattern")
        ? `Not a valid ${this.dropdownConfig.label}`
        : this.dropdownConfig.controlsName.hasError("minLength")
        ? "Required length is at least 3 characters"
        : "";
    }
  }
  patchValues(data) {
    //   const obj = [
    //     {
    //       tagName:'',
    //       _id:''
    //     }
    //   ]
    // console.log({ data });

    const selectedElement = [];
    if (data.controlsId && data.controlsId.value) {
      // console.log(data.controlsId);
      if (Array.isArray(data.controlsId.value)) {
        data.controlsId.value.forEach((idElement) => {
          const result = data.list.find(
            (item) => item[data.itemIdKey] == idElement
          );
          if (result) {
            selectedElement.push(result);
          }
        });
      } else {
        const result = data.list.find(
          (item) => item[data.itemIdKey] == data.controlsId.value
        );
        if (result) {
          selectedElement.push(result);
        }
      }
    } else if (data.controlsName && data.controlsName.value) {
      // console.log(data.controlsName);
      if (Array.isArray(data.controlsName.value)) {
        data.controlsName.value.forEach((idElement) => {
          const result = data.list.find(
            (item) => item[data.itemIdKey] == idElement
          );
          if (result) {
            selectedElement.push(result);
          }
        });
      } else {
        const result = data.list.find(
          (item) => item[data.itemIdKey] == data.controlsName.value
        );
        if (result) {
          selectedElement.push(result);
        }
      }
    }
    // console.log({ selectedElement }, data.controlsName.value);

    this.multiselectForm.get("item").setValue(selectedElement);
  }

  patchDropdown(data) {
    this.createMultiselectForm();
    // console.log("patchDropdown=>>>>>>>", data);

    const arr = [];
    if (data && !data?.ids?.length) {
      data.names.forEach((item) => {
        const obj = data.list.find((o) => o[data.itemNameKey] == item);
        arr.push(obj);
      });
    } else if (data && !data?.names?.length) {
      data.ids.forEach((item) => {
        const obj = data.list.find((o) => item == o[data.itemIdKey]);
        arr.push(obj);
      });
    }
    this.multiselectForm.get("item").setValue(arr);
  }
}
