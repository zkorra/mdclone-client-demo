import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  imports: [SharedModule],
  declarations: [HomePageComponent],
  exports: [],
})
export class HomeModule {}
