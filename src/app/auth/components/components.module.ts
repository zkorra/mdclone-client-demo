import { NgModule } from '@angular/core';
import { TextInputComponent } from './text-input/text-input.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [TextInputComponent],
  exports: [TextInputComponent],
})
export class AuthComponentsModule {}
