import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviourWordsManagementComponent } from './behaviour-words-management.component';
import { ListingModule } from '../../common/commonTable/listing';
import { TableModule } from '../../common/commonTable/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbModule } from '../../common/modules/breadcrumb/breadcrumb.module';
import { AccessModule } from '../../../pipes/access/access.module';
import { CategoryTypePipeModule } from '../../../pipes/category-type-pipe/category-type-pipe.module';
import { CustomDatePipeModule } from '../../../pipes/custom-date/custom-date-pipe.module';
import { AbsoluteRoutingModule } from '../../../pipes/absolute-routing/absolute-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionTypePipeModule } from '../../../pipes/suggestion-type-pipe/suggestion-type-pipe.module';
import {MatTabsModule} from '@angular/material/tabs';
import { SUGGESTION_MANAGEMENT } from '../../../constants/routes';
import { UtilityModule } from '../../../shared/utility/utility.module';
import { AddSuggestionsModule } from './add-suggestions/add-suggestions.module';
import { SuggestionFilterModule } from './suggestion-filter/suggestion-filter.module';
import { StatusPipeModule } from '../../../pipes/status-pipe/status-pipe.module';
 

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: `${SUGGESTION_MANAGEMENT.path}/0` },
  { path: `${SUGGESTION_MANAGEMENT.path}/:id`, component: BehaviourWordsManagementComponent }
];

const LISTING_MODULES = [ListingModule, TableModule];
const MATERIAL = [MatIconModule, MatTooltipModule, MatCardModule, MatButtonModule, MatTabsModule];
const CUSTOM_MODULES = [BreadcrumbModule, UtilityModule, AddSuggestionsModule, SuggestionFilterModule, StatusPipeModule];
const PIPES = [
  AbsoluteRoutingModule,
  CustomDatePipeModule,
  CategoryTypePipeModule,
  AccessModule,
  SuggestionTypePipeModule
];
@NgModule({
  declarations: [BehaviourWordsManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...LISTING_MODULES,
    ...PIPES,
    ...CUSTOM_MODULES,
    ...MATERIAL,
  ]
})
export class BehaviourWordsManagementModule { }
