import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryTypePipe } from "./category-type.pipe";

@NgModule({
  declarations: [CategoryTypePipe],
  exports: [CategoryTypePipe],
})
export class CategoryTypePipeModule {}
