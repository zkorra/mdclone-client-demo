import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [RegisterComponent, LoginComponent],
  exports: [],
})
export class AuthPagesModule {}
