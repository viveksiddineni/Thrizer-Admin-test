import { NgModule } from '@angular/core';
import { AccessPipe } from './access.pipe';

@NgModule({
  declarations: [AccessPipe],
  exports: [AccessPipe]
})
export class AccessModule {}
