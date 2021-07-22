import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputDateComponent } from "./view/input-date.component";
import { InputSharedModule } from "../input-shared";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ErrorMessageModule } from '../error-message/error-message.module';
@NgModule({
  declarations: [InputDateComponent],
  imports: [
    CommonModule,
    InputSharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ErrorMessageModule
  ],
  exports: [
    InputDateComponent,
    InputSharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ErrorMessageModule
  ],
})
export class InputDateModule {}
