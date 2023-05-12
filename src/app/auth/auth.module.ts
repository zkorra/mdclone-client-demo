import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent, LoginComponent } from './pages';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [RegisterComponent, LoginComponent],
  providers: [],
})
export class AuthModule {}
