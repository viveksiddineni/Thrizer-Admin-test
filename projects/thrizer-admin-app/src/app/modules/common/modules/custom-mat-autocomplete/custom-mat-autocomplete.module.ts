import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomMatAutocompleteComponent } from "./custom-mat-autocomplete.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatOptionModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ValidationErrorPipeModule } from "projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module";
import { AutoCompleteDialogModule } from '../auto-complete-dialog/auto-complete-dialog.module';

// const routes: Routes = [
//   {
//     path: "",
//     component: CustomMatAutocompleteComponent,
//   },
// ];

const MATERIALS = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatProgressSpinnerModule,
];
const PIPES = [ValidationErrorPipeModule];

@NgModule({
  declarations: [CustomMatAutocompleteComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    ReactiveFormsModule,
    ...MATERIALS,
    ...PIPES,
    AutoCompleteDialogModule
  ],
  exports: [CustomMatAutocompleteComponent],
})
export class CustomMatAutocompleteModule {}
