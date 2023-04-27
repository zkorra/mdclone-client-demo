import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPagesModule } from './pages/pages.module';

@NgModule({
  imports: [AuthPagesModule, AuthRoutingModule],
  declarations: [],
  exports: [],
})
export class AuthModule {}
