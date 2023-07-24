import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { ProfileResolver } from './profile-resolver.service';

const routes: Routes = [
  {
    path: ':username',
    component: ProfilePageComponent,
    resolve: { profile: ProfileResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
