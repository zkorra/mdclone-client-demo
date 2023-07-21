import { Component, OnInit } from '@angular/core';

import { ArticleService } from '@core/services';

@Component({
  selector: 'article-list-view',
  templateUrl: './list-view.component.html',
})
export class ListViewComponent implements OnInit {
  articles$ = this.articleService.getAll();

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // this.getArticles();
  }
}
