import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPagesModule } from './pages/pages.module';

@NgModule({
  imports: [SharedModule, AuthRoutingModule, AuthPagesModule],
  declarations: [],
  providers: [],
})
export class AuthModule {}
