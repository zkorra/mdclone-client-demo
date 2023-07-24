import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileDetailComponent } from './containers/profile-detail/profile-detail.component';

@NgModule({
  imports: [SharedModule, ProfileRoutingModule],
  declarations: [ProfilePageComponent, ProfileDetailComponent],
  exports: [],
})
export class ProfileModule {}
