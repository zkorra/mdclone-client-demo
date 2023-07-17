import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  imports: [SharedModule, EditorRoutingModule],
  exports: [],
})
export class EditorModule {}
