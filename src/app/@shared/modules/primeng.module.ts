import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [
    AvatarModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    PasswordModule,
  ],
  exports: [
    AvatarModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    PasswordModule,
  ],
})
export class PrimengModule {}
