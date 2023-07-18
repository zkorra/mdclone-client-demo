import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@core/guards';

import { EditorPageComponent } from './pages/editor-page/editor-page.component';
import { EditableResolver } from './editable-resolver.service';

const routes: Routes = [
  { path: '', component: EditorPageComponent, canActivate: [AuthGuard] },
  {
    path: ':slug',
    component: EditorPageComponent,
    canActivate: [AuthGuard],
    resolve: { article: EditableResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule {}
