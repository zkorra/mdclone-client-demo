import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@core/guards';

import { EditorPageComponent } from './pages/editor-page/editor-page.component';

const routes: Routes = [
  { path: '', component: EditorPageComponent, canActivate: [AuthGuard] },
  { path: ':slug', component: EditorPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}
