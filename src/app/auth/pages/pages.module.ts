import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [SharedModule],
  declarations: [RegisterComponent, LoginComponent],
  exports: [],
})
export class AuthPagesModule {}
