import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ISearchAutocomplete } from "projects/thrizer-admin-app/src/app/models/search-autocomplete.interface";
import { Subscription } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
  switchMap,
} from "rxjs/operators";
import { HttpService } from "projects/thrizer-admin-app/src/app/services/http.service";
import { FormControl } from "@angular/forms";
import { UtilityService } from 'projects/thrizer-admin-app/src/app/shared/utility/utility.service';
// import { UtilityService } from "projects/thrizer-admin-app/src/app/services/utility.service";
// import { TranslateService } from "projects/thrizer-admin-app/src/app/services/translate.service";
// import { MAX_LOCATION_COUNT } from "projects/thrizer-admin-app/src/app/constant/app-constant";

@Component({
  selector: "app-location-search",
  templateUrl: "./location-search.component.html",
  styleUrls: ["./location-search.component.scss"],
})
export class LocationSearchComponent implements OnInit {
  locationSearchObject: ISearchAutocomplete;
  @Input()
  set searchObject(data: ISearchAutocomplete) {
    console.log({ data });

    this.locationSearchObject = data;
    this.setLocation();
  }
  @Input() className;

  maxLocationCount = 3;
  @Input() set maxLocation(count) {
    this.maxLocationCount = count ||3;
  }

  results = [];
  page = 1;
  loading = false;
  searching = false;
  nextPageStatus = true;
  subscription = new Subscription();
  loadMoreSubscription: Subscription;
  locations: any[] = [];
  locationCount = 1;
  selectable = true;
  removable = true;
  addOnBlur = false;
  locationControl = new FormControl(null);
  isAddMore = false;
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // @Output() locationsEmit = new EventEmitter();
  @Output() locatonObjects = new EventEmitter();
  @Output() currentLocation = new EventEmitter();
  constructor(
    private http: HttpService,
    private utilityService: UtilityService
  ) {}
  ngOnInit(): void {
    this.initiateListener();
  }
  setLocation() {
    // if (this.locationSearchObject.controlValidator) {
    //   this.locationControl.setValidators(
    //     this.locationSearchObject.controlValidator
    //   );
    //   this.locationControl.updateValueAndValidity();
    // }
    if (
      this.locationSearchObject.currentLocationControl &&
      this.locationSearchObject.currentLocationControl.lat.value &&
      this.locationSearchObject.currentLocationControl.long.value
    ) {
      // this.getCurrentPosition();
      return;
    }
    this.locations = this.locationSearchObject.prefilledList || [];
    this.locatonObjects.emit(this.locations);
    this.locations = this.locations.map((item) => {
      return {
        cityId: item._id,
        name: item.cityName,
      };
    });
  }

  initiateListener() {
    this.locationControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map((text) => {
          const trimedText = text ? text.trim() : "";
          this.results = null;
          this.page = 1;
          return trimedText;
        }),
        filter((text) => !!text && typeof text === "string"),
        switchMap((text) => {
          this.searching = true;
          this.loading = false;
          this.nextPageStatus = true;
          return this.search();
        })
      )
      .subscribe(
        (response) => {
          console.log(response);
          
          this.updateResults(response);
        },
        (error) => {}
      );
  }

  loadResults() {
    this.loading = true;
    this.search().subscribe(
      (response) => {
        this.updateResults(response);
      },
      (error) => {}
    );
  }

  search() {
    console.log(this.locationControl.value)
    return this.http.get(this.locationSearchObject.url, {
      page: this.page,
      search: this.locationControl.value.trim(),
      limit: 10,
    });
  }

  updateResults(response) {
    this.results = (this.results || []).concat(response.data.data);
    this.nextPageStatus = response.data.nextPageStatus;
    ++this.page;
    this.searching = false;
    this.loading = false;
  }

  remove(index) {
    if (this.locations.length > 1) {
      this.locations.splice(index, 1);
      const locationIdArray = this.locations
        .map((loc) => loc.cityId)
        .filter((item) => item);
      this.locationSearchObject.currentLocationControl.lat.setValue(null);
      this.locationSearchObject.currentLocationControl.long.setValue(null);
      this.locationSearchObject.control.setValue(locationIdArray);
      this.locatonObjects.emit(this.locations);
      if (this.locations.length === this.locationCount) {
        this.isAddMore = false;
      }
      return;
    }
    this.utilityService.showAlert("3 field required");
  }

  optionSelected(data) {
    console.log( data.option.value[this.locationSearchObject.viewKey]); // console.log(data.value);
    
    this.locationSearchObject.selectedValue =
    data.option.value[this.locationSearchObject.valueKey];
    this.locationSearchObject.selectedViewValue =
    data.option.value[this.locationSearchObject.viewKey];
    console.log(this.locations)
    this.locationControl.setValue(null);
    const canAdd = this.locations.findIndex(
      (loc) =>
        loc._id === data.option.value[this.locationSearchObject.valueKey]
    );
    // if (this.isCurrenLocation()) {
    //   this.locations.length = 0;
    // }
    if (canAdd === -1) {
      this.locations.push(data.option.value);
      this.locatonObjects.emit(this.locations);
      const locationIdArray = this.locations
        .map((loc) => loc._id)
        .filter((item) => item);
      // this.locationSearchObject.currentLocationControl.lat.setValue(null);
      // this.locationSearchObject.currentLocationControl.long.setValue(null);
      this.locationSearchObject.control.setValue(locationIdArray);
      this.currentLocation.emit(null);
    }
  }

  // isCurrenLocation() {
  //   return (
  //     this.locationSearchObject.currentLocationControl.lat.value &&
  //     this.locationSearchObject.currentLocationControl.long.value
  //   );
  // }

  // async getCurrentPosition() {
  //   try {
  //     const location = await this.utilityService.getCurrentLocation();
  //     console.log("location", location);
  //     this.locationSearchObject.currentLocationControl.lat.setValue(
  //       location.latitude
  //     );
  //     this.locationSearchObject.currentLocationControl.long.setValue(
  //       location.longitude
  //     );
  //     this.locationSearchObject.control.setValue(null);
  //     this.locations = [
  //       {
  //         [this.locationSearchObject.viewKey]: location.city,
  //       },
  //     ];
  //     console.log(this.locationSearchObject);

  //     this.locatonObjects.emit(this.locations);
  //     this.currentLocation.emit(location);
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // }
}
