import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectSearchComponent } from "./component/select-search/select-search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule
} from "@angular/material";

const MATERIAL = [
  FormsModule,
  MatInputModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [SelectSearchComponent],
  imports: [CommonModule, ...MATERIAL],
  exports: [SelectSearchComponent, ...MATERIAL]
})
export class SelectSearchModule {}
