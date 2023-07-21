import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';

import { DetailViewComponent } from './containers/detail-view/detail-view.component';

import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ListViewComponent } from './containers/list-view/list-view.component';
import { ArticleFeedPage } from './pages/article-feed-page/article-feed-page.component';

@NgModule({
  imports: [SharedModule, ArticleRoutingModule],
  declarations: [
    DetailViewComponent,
    ListViewComponent,

    ArticleFeedPage,
    ArticlePageComponent,
  ],
  exports: [],
})
export class ArticleModule {}
