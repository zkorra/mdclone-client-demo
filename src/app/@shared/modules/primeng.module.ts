import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [ButtonModule, InputTextModule, MenubarModule, PasswordModule],
  exports: [ButtonModule, InputTextModule, MenubarModule, PasswordModule],
})
export class PrimengModule {}
