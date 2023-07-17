import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { EditorRoutingModule } from './editor-routing.module';

import { ArticleFormComponent } from './containers/article-form/article-form.component';

import { EditorPageComponent } from './pages/editor-page/editor-page.component';

@NgModule({
  imports: [SharedModule, EditorRoutingModule],
  declarations: [ArticleFormComponent, EditorPageComponent],
})
export class EditorModule {}
