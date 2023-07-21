import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';

import { DetailViewComponent } from './containers/detail-view/detail-view.component';

import { ArticlePageComponent } from './pages/article-page/article-page.component';

@NgModule({
  imports: [SharedModule, ArticleRoutingModule],
  declarations: [DetailViewComponent, ArticlePageComponent],
  exports: [],
})
export class ArticleModule {}
