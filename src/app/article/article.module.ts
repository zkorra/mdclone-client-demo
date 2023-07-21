import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';

import { ArticleCardComponent } from './components/article-card/article-card.component';

import { DetailViewComponent } from './containers/detail-view/detail-view.component';
import { ListViewComponent } from './containers/list-view/list-view.component';

import { ArticleFeedPage } from './pages/article-feed-page/article-feed-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

@NgModule({
  imports: [SharedModule, ArticleRoutingModule],
  declarations: [
    ArticleCardComponent,

    DetailViewComponent,
    ListViewComponent,

    ArticleFeedPage,
    ArticlePageComponent,
  ],
  exports: [],
})
export class ArticleModule {}
