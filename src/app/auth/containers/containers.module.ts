import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AuthComponentsModule } from '../components/components.module';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  imports: [SharedModule, AuthComponentsModule],
  declarations: [LoginFormComponent, RegisterFormComponent],
  exports: [LoginFormComponent, RegisterFormComponent],
})
export class AuthContainersModule {}
