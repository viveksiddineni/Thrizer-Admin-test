import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownFilterComponent } from "./component/dropdown-filter.component";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { ValidationErrorPipeModule } from "projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module";
import { SelectSearchModule } from "../select-search/select-search.module";
@NgModule({
  declarations: [DropdownFilterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule,
    SelectSearchModule,
  ],
  exports: [DropdownFilterComponent],
})
export class DropdownFilterModule {}
