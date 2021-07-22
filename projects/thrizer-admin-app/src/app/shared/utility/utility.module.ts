import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilityService } from "./utility.service";
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ConfirmationModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
  ],

  entryComponents: [ConfirmationModalComponent],
})
export class UtilityModule {}
