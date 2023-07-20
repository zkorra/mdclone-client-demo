import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticleResolver } from './article-resolver.service';

const routes: Routes = [
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
