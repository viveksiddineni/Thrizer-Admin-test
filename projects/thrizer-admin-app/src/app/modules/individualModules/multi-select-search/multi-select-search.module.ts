import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectSearchComponent } from './multi-select-search.component';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



const MATERIAL=[MatInputModule,MatAutocompleteModule,MatChipsModule,ReactiveFormsModule,MatFormFieldModule]
@NgModule({
  declarations: [MultiSelectSearchComponent],
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports:[MultiSelectSearchComponent]
})
export class MultiSelectSearchModule { }
