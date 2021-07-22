import { NgModule } from "@angular/core";
import { FileNameFromUrlPipe } from "./file-name-from-url.pipe";

@NgModule({
  declarations: [FileNameFromUrlPipe],
  exports: [FileNameFromUrlPipe],
  providers: [FileNameFromUrlPipe]
})
export class FileNameFromUrlModule {}
