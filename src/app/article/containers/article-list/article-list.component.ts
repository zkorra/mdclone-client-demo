import { Component, OnInit } from '@angular/core';

import { ArticleService } from '@core/services';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {
  articles$ = this.articleService.getAll();

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // this.getArticles();
  }
}
