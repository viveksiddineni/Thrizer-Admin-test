import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MultiselectDropdownComponent } from "./components/multiselect-dropdown/multiselect-dropdown.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GetControlModule } from "projects/thrizer-admin-app/src/app/pipes/get-control";
import { ValidationErrorPipeModule } from "projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

const MATERIAL = [MatFormFieldModule, MatInputModule, MatSelectModule];
const PIPES = [GetControlModule, ValidationErrorPipeModule];

@NgModule({
  declarations: [MultiselectDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ...MATERIAL,
    ...PIPES,
  ],
  exports: [MultiselectDropdownComponent],
})
export class MultiselectDropdownModule {}
