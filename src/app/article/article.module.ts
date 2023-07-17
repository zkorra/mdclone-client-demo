import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [SharedModule, ArticleRoutingModule],
  exports: [],
})
export class ArticleModule {}
