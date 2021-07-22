import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TableComponent } from "./table.component";
import { ForModule } from "../for";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
// import { StatusModule } from 'projects/thrizer-admin-app/src/app/pipes/statusPipe/status.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    // SharedModule,
    MatTableModule,
    MatCheckboxModule,
    ForModule,
    MatSortModule,
    // StatusModule
  ],
  exports: [TableComponent],
})
export class TableModule {}
