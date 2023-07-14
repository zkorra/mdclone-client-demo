import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';

import { PasswordFieldComponent } from './components/password-field/password-field.component';

import { LoginFormComponent } from './containers/login-form/login-form.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [
    PasswordFieldComponent,

    LoginFormComponent,
    RegisterFormComponent,

    LoginPageComponent,
    RegisterPageComponent,
  ],
  providers: [],
})
export class AuthModule {}
