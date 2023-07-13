import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AuthContainersModule } from '../containers/containers.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [SharedModule, AuthContainersModule],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthPagesModule {}
