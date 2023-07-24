import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';

import { ArticleCardComponent } from './components/article-card/article-card.component';

import { ArticleDetailComponent } from './containers/article-detail/article-detail.component';
import { ArticleListComponent } from './containers/article-list/article-list.component';

import { ArticleFeedPage } from './pages/article-feed-page/article-feed-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

@NgModule({
  imports: [SharedModule, ArticleRoutingModule],
  declarations: [
    ArticleCardComponent,

    ArticleDetailComponent,
    ArticleListComponent,

    ArticleFeedPage,
    ArticlePageComponent,
  ],
  exports: [],
})
export class ArticleModule {}
