import { FormControl } from "@angular/forms";

export interface ApiConfig {
  showLoader?: boolean;
  skipErrorPopup?: boolean;
}

export interface IQuildConfig {
  control: FormControl;
  label: string;
  editControl?: FormControl;
  htmlcontrol?: FormControl;
}

export interface DropDown {
  control: FormControl;
  label: string;
  list: { viewValue: string; value: any }[];
  search?: boolean;
  multiple?: boolean;
  hideAll?: boolean;
}

export interface MultiSelectDropdown {
  controlsName?: FormControl;
  controlsId?: FormControl;
  label: string;
  placeHolder: string;
  list: {}[];
  itemNameKey?: string;
  itemIdKey?: string;
  selectAllText?: string;
  unSelectAllText?: string;
  itemsShowLimit: number;
  allowSearchFilter: boolean;
  selectedItems?: [];
  singleSelection: boolean;
}

export interface EditMultiSelectDropdown {
  list: {}[];
  ids: [];
  names: [];
  itemNameKey: string;
  itemIdKey: string;
}

export interface IDocument {
  audioLangUrl: string;
  file?: File;
  audioLangName?: string;
  type?: string;
  _id?: string;
}

export interface IAutocomplete {
  control: FormControl;
  label?: string;
  type?: string;
  minimumRequired?: number;
  maximumRequired?: number;
  viewTilesCount: number;
  placeholder?: string;
  apiUrl: string;
  itemName: {
    view: string;
    value: string;
  };
  itemCode?: {
    view: string;
    value: string;
  };
  queryParams?:any;
}
export interface IRadio {
  control: FormControl;
  label: string;
  data: any[];
  viewKey: string;
  valueKey: string;
}

export interface IQuildConfig {
  control: FormControl;
  label: string;
}
