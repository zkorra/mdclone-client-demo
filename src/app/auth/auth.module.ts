import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPagesModule } from './pages/pages.module';

@NgModule({
  imports: [SharedModule, AuthPagesModule, AuthRoutingModule, FormsModule],
  declarations: [],
  exports: [],
})
export class AuthModule {}
