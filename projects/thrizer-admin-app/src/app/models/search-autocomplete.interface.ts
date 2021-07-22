import { FormControl } from "@angular/forms";

export interface ISearchAutocomplete {
  control: FormControl;
  url: string;
  viewKey: string;
  valueKey: string;
  placeholder: string;
  selectedValue?: any;
  selectedViewValue?: any;
  prefilledList?: any;
  currentLocationControl?: {
    lat: FormControl;
    long: FormControl;
  };
  controlValidator?: any;
}
