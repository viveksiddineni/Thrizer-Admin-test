import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSuggestionsComponent } from './add-suggestions.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { GetControlModule } from 'projects/thrizer-admin-app/src/app/pipes/get-control';
import { AbsoluteRoutingModule } from 'projects/thrizer-admin-app/src/app/pipes/absolute-routing/absolute-routing.module';
import { ValidationErrorPipeModule } from 'projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module';
import { MultiselectDropdownModule } from '../../../individualModules/multiselect-dropdown/multiselect-dropdown.module';
import { BreadcrumbModule } from '../../../common/modules/breadcrumb/breadcrumb.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


const MATERIAL = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatDialogModule
];
const PIPES = [
  GetControlModule,
  AbsoluteRoutingModule,
  ValidationErrorPipeModule,
];
const CUSTOM_MODULES = [MultiselectDropdownModule, BreadcrumbModule];

@NgModule({
  declarations: [AddSuggestionsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MATERIAL,
    ...PIPES,
    ...CUSTOM_MODULES,
  ],
  entryComponents: [AddSuggestionsComponent]
})
export class AddSuggestionsModule { }
