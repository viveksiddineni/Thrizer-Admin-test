import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionFilterComponent } from './suggestion-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FilterModule } from '../../../common/commonTable/listing/components/filter/filter.module';
import { DropdownFilterModule } from '../../../common/modules/dropdown-filter/dropdown-filter.module';
import { MultiselectDropdownModule } from '../../../individualModules/multiselect-dropdown/multiselect-dropdown.module';
import { DateFilterModule } from '../../../common/modules/date-filter/date-filter.module';
import { GetControlModule } from 'projects/thrizer-admin-app/src/app/pipes/get-control';
import { ValidationErrorPipeModule } from 'projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';

const MATERIAL = [MatFormFieldModule, MatSelectModule,MatButtonModule];
const CUSTOM_MODULE = [
  FilterModule,
  DropdownFilterModule,
  MultiselectDropdownModule,
  DateFilterModule,
];
const PIPES = [GetControlModule, ValidationErrorPipeModule];

@NgModule({
  declarations: [SuggestionFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MATERIAL,
    ...CUSTOM_MODULE,
    ...PIPES,
  ]
})
export class SuggestionFilterModule { }
