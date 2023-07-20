import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';

import { ArticleViewComponent } from './containers/article-view/article-view.component';

import { ArticlePageComponent } from './pages/article-page/article-page.component';

@NgModule({
  imports: [SharedModule, ArticleRoutingModule],
  declarations: [ArticleViewComponent, ArticlePageComponent],
  exports: [],
})
export class ArticleModule {}
