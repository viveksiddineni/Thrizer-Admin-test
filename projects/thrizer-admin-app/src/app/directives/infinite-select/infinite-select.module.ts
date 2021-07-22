import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InfiniteSelectDirective } from "./directive/infinite-select.directive";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [InfiniteSelectDirective],
  imports: [CommonModule, MatSelectModule],
  exports: [InfiniteSelectDirective],
})
export class InfiniteSelectModule {}
