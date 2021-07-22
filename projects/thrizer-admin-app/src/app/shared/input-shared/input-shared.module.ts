import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

const Modules = [MatInputModule, MatFormFieldModule, ReactiveFormsModule];

@NgModule({
  imports: Modules,
  exports: Modules,
})
export class InputSharedModule {}
