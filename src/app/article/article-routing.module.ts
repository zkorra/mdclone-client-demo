import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleResolver } from './article-resolver.service';

import { ArticleFeedPage } from './pages/article-feed-page/article-feed-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

const routes: Routes = [
  { path: '', component: ArticleFeedPage },
  {
    path: ':slug',
    component: ArticlePageComponent,
    resolve: {
      article: ArticleResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
