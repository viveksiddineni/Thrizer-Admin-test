import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { HttpService } from 'projects/thrizer-admin-app/src/app/services/http.service';
import { ISearchAutocomplete } from 'projects/thrizer-admin-app/src/app/models/search-autocomplete.interface';

@Component({
  selector: 'app-multi-select-search',
  templateUrl: './multi-select-search.component.html',
  styleUrls: ['./multi-select-search.component.scss']
})
export class MultiSelectSearchComponent implements OnInit {

  valueSearchObject: ISearchAutocomplete;
  @Input()
  set searchObject(data: ISearchAutocomplete) {
    console.log({ data });

    this.valueSearchObject = data;
    // this.setLocation();
  }
  results = [];
  list=[]
  page = 1;
  loading = false;
  searching = false;
  nextPageStatus = true;
  subscription = new Subscription();
  loadMoreSubscription: Subscription;
  selectConfig;
  visible = true;
  selectable = true;
  removable = true;
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  searchKeyControl = new FormControl(null);
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private http:HttpService
  ) {
    // this.filteredFruits = this.searchKey.valueChanges.pipe(
    //     startWith(null),
    //     map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    this.initiateListener();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.searchKeyControl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.searchKeyControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }


  ngOnInit(): void {
  }


  initiateListener() {
    this.searchKeyControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map((text) => {
          console.log('search-btn',text)
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
          console.log('search-btn',this.searchKeyControl.value,this.selectConfig.url)
          return this.search();
        })
      )
      .subscribe(
        (response) => {
          console.log(response,'---response')
          this.updateResults(response);
        },
        (error) => {}
      );
  }
  updateResults(response) {
    this.results = (this.results || []).concat(response.data.result);
    this.nextPageStatus = response.data.nextPageStatus;
    ++this.page;
    this.searching = false;
    this.loading = false;
  }

  search() {
    console.log('search-btn',this.searchKeyControl.value,this.selectConfig.url)
    return this.http.get(this.selectConfig.url, {
      page: this.page,
      searchKeyword: this.searchKeyControl.value.trim(),
      limit: 10,
    });
  }

}
