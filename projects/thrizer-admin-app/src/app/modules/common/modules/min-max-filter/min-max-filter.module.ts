import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MinMaxFilterComponent } from "./component/min-max-filter.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DigitOnlyModule } from "projects/thrizer-admin-app/src/app/directives/digit-only/digit-only.module";
import { ValidationErrorPipeModule } from "projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

const MATERIAL = [MatInputModule, MatFormFieldModule];

@NgModule({
  declarations: [MinMaxFilterComponent],
  imports: [
    CommonModule,
    ...MATERIAL,
    ReactiveFormsModule,
    FormsModule,
    DigitOnlyModule,
    ValidationErrorPipeModule,
  ],
  exports: [MinMaxFilterComponent],
})
export class MinMaxFilterModule {}
