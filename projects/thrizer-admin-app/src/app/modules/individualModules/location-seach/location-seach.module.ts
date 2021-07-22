import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationSearchComponent } from "./location-search.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ValidationErrorPipeModule } from "projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module";
import { MatOptionModule } from "@angular/material/core";
// import { AutocompleteScrollModule } from "projects/thrizer-admin-app/src/app/directives/autocomplete-scroll/autocomplete-scroll.module";
import { MatInputModule } from "@angular/material/input";
// import { TranslateModule } from "projects/thrizer-admin-app/src/app/pipes/translate/translate.module";

const MATERIAL = [
  MatFormFieldModule,
  MatChipsModule,
  MatIconModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatOptionModule,
  // AutocompleteScrollModule,
  MatInputModule,
];
const PIPES = [ValidationErrorPipeModule];
@NgModule({
  declarations: [LocationSearchComponent],
  imports: [CommonModule, ReactiveFormsModule, ...MATERIAL, ...PIPES],
  exports: [LocationSearchComponent],
})
export class LocationSearchModule {}
