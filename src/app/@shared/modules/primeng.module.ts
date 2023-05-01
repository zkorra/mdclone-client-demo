import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [ButtonModule, MenubarModule],
  exports: [ButtonModule, MenubarModule],
})
export class PrimengModule {}
