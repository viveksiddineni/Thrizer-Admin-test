import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './view/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { AbsoluteRoutingModule } from '../../pipes/absolute-routing/absolute-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { UtilityModule } from 'projects/thrizer-admin-app/src/app/shared/utility/utility.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConstantParserModule } from 'projects/thrizer-admin-app/src/app/pipes/constant-parser/constant-parser.module';
import { LayoutService } from './service/layout.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SidebarModule } from './layout-parts/sidebar/sidebar.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatBadgeModule,
    UtilityModule,
    AbsoluteRoutingModule,
    MatDialogModule,
    ConstantParserModule,
    MatProgressBarModule,
    SidebarModule
  ],
  providers:[LayoutService]
})
export class LayoutModule { }
