import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { httpInterceptorProviders } from "./interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ToastNotificationModule } from './shared/toast-notification/toast-notification.module';
import { PopupProgressComponent } from './components/popup-progress/popup-progress.component';
import { MatDialogModule } from '@angular/material/dialog';
import { JoinPipe } from './pipes/join-array-pipe/join.pipe';

const MATERIAL = [MatSnackBarModule, MatProgressBarModule, MatDialogModule];

@NgModule({
  declarations: [AppComponent,PopupProgressComponent],
  imports: [
    ...MATERIAL,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastNotificationModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
