import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForModule } from "../for";

import { ListingComponent } from "./listing.component";
// import { SearchFilterModule } from '../../layout/layout-shared/search-filter/search-filter.module';
import { FormsModule } from "@angular/forms";
import { SearchFilterModule } from "../search-filter/search-filter.module";
import { FilterModule } from "./components/filter/filter.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
// import { NoDataModule } from '../../no-data/no-data.module';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    // LayoutSharedModule,
    // NoDataModule,
    FormsModule,
    ForModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    SearchFilterModule,
    FilterModule,
  ],
  exports: [ListingComponent, FilterModule, ForModule],
})
export class ListingModule {}
